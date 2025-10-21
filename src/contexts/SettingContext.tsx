import AsyncStorage from "expo-sqlite/kv-store";
import { createContext, useContext, useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";
import { vrcColors } from "@/configs/vrchat";

const documentDirectory = FileSystem.documentDirectory;

// provide user settings globally,
// all data stored in async storage with prefix: "setting_"


//
interface UIOption { // layout, color schema
  layouts: {
    homeTabMode: "default" | "friend-locations" | "feeds" | "calendar";
    // CardViewColumns: 1 | 2 | 3 | 4;
  };
  theme: {
    colorSchema: "light" | "dark" | "system";
    accentColor: string | undefined; 
  };
  user: {
    friendColor: string | undefined; 
    favoriteFriendsColors: { [favoriteGroupId: string]: string }; // override friend color for favorite groups
    // useFriendOrder: boolean;
  };
}
interface NotificationOption {
  usePushNotification: boolean;
  allowedNotificationTypes: string[]; // e.g. ["friend-online" ]
}
interface PipelineOption {
  keepMsgNum:  number; // how many feeds to keep, default 100
  enableOnBackground: boolean;
}
interface OtherOption {
  sendDebugLogs: boolean;
}

interface Setting {
  uiOptions: UIOption;
  notificationOptions: NotificationOption;
  pipelineOptions: PipelineOption;
  otherOptions: OtherOption;
}

const defaultSettings: Setting = {
  uiOptions: {
    layouts: {
      homeTabMode: "default",
    },
    theme: {
      colorSchema: "system",
      accentColor: undefined,
    },
    user: {
      friendColor: vrcColors.friend,
      favoriteFriendsColors: {},
    },
  },
  notificationOptions: {
    usePushNotification: false,
    allowedNotificationTypes: [],
  },
  pipelineOptions: {
    keepMsgNum: 100,
    enableOnBackground: false,
  },
  otherOptions: {
    sendDebugLogs: false,
  },
}

interface SettingContextType {
  settings: Setting;
  defaultSettings: Setting;
  saveSettings: (newSettings: Partial<Setting>) => Promise<void>;
  loadSettings: () => Promise<Setting>;
}
const Context = createContext<SettingContextType | undefined>(undefined);

const useSetting = () => {
  const context = useContext(Context);
  if (!context) throw new Error("useSetting must be used within a SettingContextProvider");
  return context;
} 

const SettingProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [settings, setSettings] = useState<Setting>(defaultSettings);
  useEffect(() => {
    // Load settings from async storage on mount
    loadSettings().then(setSettings);
  }, []);

  const saveSettings = async (newSettings: Partial<Setting>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    // Save settings to async storage
    const entries = Object.entries(newSettings).map(([key, value]) => [
      `setting_${key}`,
      JSON.stringify(value),
    ] as [string, string]);
    await AsyncStorage.multiSet(entries);
  };

  const loadSettings = async (): Promise<Setting> => {
    // Load settings from async storage
    const storedSettings = await AsyncStorage.multiGet(
      Object.keys(defaultSettings).map(key => `setting_${key}`)
    );
    const newSettings = { ...defaultSettings };
    storedSettings.forEach(([key, value]) => {
      if (value !== null) {
        const settingKey = key.replace("setting_", "") as keyof Setting;
        newSettings[settingKey] = { ...recursiveApply(newSettings[settingKey], JSON.parse(value)) };
      }
    });
    // console.log("Loaded settings:", JSON.stringify(newSettings, null, 2));
    return newSettings;
  }

  const recursiveApply = (base: any, apply: any) => {
    for (const key in base) {
      if (typeof base[key] === "object" && !Array.isArray(base[key])) {
        if (apply[key] !== undefined) recursiveApply(base[key], apply[key]);
      } else {
        base[key] = apply[key];
      }
    }
    return base;
  }

  return (
    <Context.Provider value={{
      settings,
      defaultSettings,
      saveSettings,
      loadSettings,
    }}>
      {children}
    </Context.Provider>
  );
}

export { SettingProvider, useSetting };