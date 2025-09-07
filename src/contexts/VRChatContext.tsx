// VRCのAPIを使うためのContext
import { AuthenticationApi, AvatarsApi, Configuration, FavoritesApi, FriendsApi, GroupsApi, InstancesApi, InviteApi, UsersApi, WorldsApi } from "@/vrchat/api";
import { PipelineMessage } from "@/vrchat/pipline/type";
import Constants from "expo-constants";
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import WebSocket from 'ws';


const BASE_PIPELINE_URL = "wss://pipeline.vrchat.cloud/";
const BASE_API_URL = "https://api.vrchat.cloud/api/1";

interface Pipeline {
  ws: WebSocket | null;
  lastMessage: PipelineMessage<any> | null;
  sendMessage?: (msg: object) => void; // not implemented for vrcapi
}

export interface VRChatContextType {
  config: Configuration | undefined;
  configureAPI: (user: { username?: string; password?: string }) => Configuration;
  configurePipeline: (url: string) => void;
  unConfigure: () => void;
  // apis
  authenticationApi: AuthenticationApi;
  worldsApi: WorldsApi;
  avatarsApi: AvatarsApi;
  usersApi: UsersApi;
  favoritesApi: FavoritesApi;
  friendsApi: FriendsApi;
  groupsApi: GroupsApi;
  instancesApi: InstancesApi;
  inviteApi: InviteApi;
  // pipeline
  pipeline : Pipeline;

}
const Context = createContext<VRChatContextType | undefined>(undefined)

const useVRChat = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error("useVRChat must be used within a VRChatProvider")
  }
  return context
}

const VRChatProvider: React.FC<{ children?: ReactNode }> = ({children}) => {
  // setting up VRChat client with application details 
  const name = Constants.expoConfig?.name || "vrcmm";
  const version = Constants.expoConfig?.version || "0.0.0-dev";
  const contact = Constants.expoConfig?.extra?.vrcmm?.contact || "dev@ktrn.dev";
  const [config, setConfig] = useState<Configuration>();
  const ws = useRef<WebSocket | null>(null); // websocket
  const authTokenRef = useRef<string | null>(null); // authToken for pipeline
  const [shouldReconnect, setShouldReconnect] = useState(true); // auto reconnect flag ≒ piplene on/off
  const [reconnectCount, setReconnectCount] = useState(0);
  const [lastJsonMessage, setLastJsonMessage] = useState<PipelineMessage<any> | null>(null);

  const configureAPI = (user: { username?: string; password?: string }) => {
    const newConfig = new Configuration({
      // basePath: BASE_API_URL, // default
      username: user.username,
      password: user.password,
      baseOptions: {
        headers: {"User-Agent": `${name}/${version} ${contact}`},
      }
    });
    setConfig(newConfig); // 即時更新
    return newConfig;
  }

  // Pipeline(Websocket)  https://vrchat.community/websocket
  const configurePipeline = (authToken: string) => {
    authTokenRef.current = authToken;
    setReconnectCount(0);
    setShouldReconnect(true);
    createWebSocket()
  }


  const createWebSocket = () => {
    const url = BASE_PIPELINE_URL + "?authToken=" + authTokenRef.current;
    const userAgent = `${name}/${version} ${contact}`;
    if (ws.current)  ws.current.close();
    ws.current = new WebSocket(url, {
      headers: {
        "User-Agent": userAgent
      }
    });
    ws.current.onopen = () => {
      console.log("Pipeline connected");
    }
    ws.current.onclose = (e) => {
      console.log("Pipeline disconnected", e.code, e.reason);
    }
    ws.current.onerror = (e) => {
      console.error("Pipeline error", e.message);
    }
    ws.current.onmessage = (e) => {
      try {
        const rawMsg = JSON.parse(e.data.toString());
        const msg : PipelineMessage = {
          type: rawMsg.type || "unknown",
          content: rawMsg.content || {},
        };
        setLastJsonMessage(msg);
      } catch (err) {
        console.error("Failed to parse pipeline message", err);
      }
    }
    setTimeout(() => {
      if (ws.current && ws.current.readyState !== WebSocket.OPEN) {
        console.warn("Pipeline connection timeout");
        ws.current.close();
        ws.current = null;
      }
    }, 5000); // 5秒でタイムアウト
  }

  const closeWebSocket = () => {
    if (ws.current) {
      ws.current.close();
      ws.current = null;
    }
    setShouldReconnect(false);
    setReconnectCount(0);
  }

  // on timeout, try to reconnect 
  useEffect(() => { 
    if (!ws.current && shouldReconnect) {
      // try to reconnect
      setTimeout(() => {
        setReconnectCount(c => c + 1);
      }, Math.min(1000 * (2 ** reconnectCount), 30000)); // exponential backoff, max 30s
    }
  }, [ws.current]);
  // when reconnectCount changes, try to reconnect
  useEffect(() => {
    if (reconnectCount > 0 && shouldReconnect) {
      console.log(`Reconnecting to pipeline... (attempt ${reconnectCount})`);
      if (authTokenRef.current) createWebSocket();
    }
  }, [reconnectCount]);

  const unConfigure = () => {
    console.log("Unconfigure VRChatContext");
    setConfig(undefined);
    authTokenRef.current = null;
    closeWebSocket();
  }

  return (
    <Context.Provider value={{
      config,
      configureAPI,
      configurePipeline,
      unConfigure,
      // https apis
      authenticationApi: new AuthenticationApi(config),
      worldsApi: new WorldsApi(config),
      avatarsApi: new AvatarsApi(config),
      usersApi: new UsersApi(config),
      favoritesApi: new FavoritesApi(config),
      friendsApi: new FriendsApi(config),
      groupsApi: new GroupsApi(config),
      instancesApi: new InstancesApi(config),
      inviteApi: new InviteApi(config),
      // pipeline
      pipeline: {
        ws: ws.current,
        lastMessage: lastJsonMessage,
        sendMessage: undefined, // not implemented for vrcapi
      }
    }}>
      {children}
    </Context.Provider>
  )
} 



export { useVRChat, VRChatProvider };

