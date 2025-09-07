import GenericScreen from "@/components/layout/GenericScreen";
import ListViewUser from "@/components/view/item-ListView/ListViewUser";
import LoadingIndicator from "@/components/view/LoadingIndicator";
import { spacing } from "@/config/styles";
import { useVRChat } from "@/contexts/VRChatContext";
import { extractErrMsg } from "@/lib/extractErrMsg";
import { routeToUser } from "@/lib/route";
import { getState } from "@/lib/vrchatUtils";
import { LimitedUserFriend } from "@/vrchat/api";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

export default function Friends() {
  const vrc = useVRChat();
  const theme = useTheme();
  const NumPerReq = 50;

  const MaterialTab = createMaterialTopTabNavigator();

  // separate loading with online,active and offline friends


  const FavoriteFriendsTab = () => { return <></> }

  const OnlineFriendsTab = () => {
    const offset = useRef(0);
    const [isLoading, setIsLoading] = useState(false);
    const [friends, setFriends] = useState<LimitedUserFriend[]>([]);
    const fetchFriends = async () => {
      setIsLoading(true);
      try {
        const res = await vrc.friendsApi.getFriends(offset.current, NumPerReq , false);
        const filtered = res.data.filter(f => getState(f) === "online");
        offset.current === 0 ? setFriends(filtered) : setFriends(prev => [...prev, ...filtered]);
        offset.current += res.data.length;
      } catch (e) {
        console.error("Failed to fetch friends:", extractErrMsg(e));
      } finally {
        setIsLoading(false);
      }
    }
    const loadMore = async () => {
      if (isLoading) return;
      await fetchFriends();
    }
    const refresh = async () => {
      if (isLoading) return;
      offset.current = 0;
      await fetchFriends();
    }
    useEffect(() => {
      fetchFriends();
    }, []);
    return (
      <>
        { isLoading && <LoadingIndicator absolute /> }
        <FlatList
          data={friends}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListViewUser user={item} style={styles.cardView} onPress={() => routeToUser(item.id)} />
          )}
          numColumns={1}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          refreshing={isLoading}
          onRefresh={refresh}
        />
      </>
    )
  }

  const ActiveFriendsTab = () => {
    const offset = useRef(0);
    const [isLoading, setIsLoading] = useState(false);
    const [friends, setFriends] = useState<LimitedUserFriend[]>([]);
    const fetchFriends = async () => {
      setIsLoading(true);
      try {
        const res = await vrc.friendsApi.getFriends(offset.current, NumPerReq , false);
        const filtered = res.data.filter(f => getState(f) === "active");
        offset.current === 0 ? setFriends(filtered) : setFriends(prev => [...prev, ...filtered]);
        offset.current += res.data.length;
      } catch (e) {
        console.error("Failed to fetch friends:", extractErrMsg(e));
      } finally {
        setIsLoading(false);
      }
    }
    const loadMore = async () => {
      if (isLoading) return;
      await fetchFriends();
    }
    const refresh = async () => {
      if (isLoading) return;
      offset.current = 0;
      await fetchFriends();
    }
    useEffect(() => {
      fetchFriends();
    }, []);
    return (
      <>
        { isLoading && <LoadingIndicator absolute /> }
        <FlatList
          data={friends}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListViewUser user={item} style={styles.cardView} onPress={() => routeToUser(item.id)} />
          )}
          numColumns={1}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          refreshing={isLoading}
          onRefresh={refresh}
        />
      </>
    )
  }

  const OfflineFriendsTab = () => {
    const offset = useRef(0);
    const [isLoading, setIsLoading] = useState(false);
    const [friends, setFriends] = useState<LimitedUserFriend[]>([]);
    const fetchFriends = async () => {
      setIsLoading(true);
      try {
        const res = await vrc.friendsApi.getFriends(offset.current, NumPerReq , true);
        // const filtered = res.data.filter(f => getState(f) === "offline"); // ↑ offline only, so no need to check again
        const filtered = res.data;
        offset.current === 0 ? setFriends(filtered) : setFriends(prev => [...prev, ...filtered]);
        offset.current += res.data.length;
      } catch (e) {
        console.error("Failed to fetch friends:", extractErrMsg(e));
      } finally {
        setIsLoading(false);
      }
    }
    const loadMore = async () => {
      if (isLoading) return;
      await fetchFriends();
    }
    const refresh = async () => {
      if (isLoading) return;
      offset.current = 0;
      await fetchFriends();
    }
    useEffect(() => {
      fetchFriends();
    }, []);
    return (
      <>
        { isLoading && <LoadingIndicator absolute /> }
        <FlatList
          data={friends}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListViewUser user={item} style={styles.cardView} onPress={() => routeToUser(item.id)} />
          )}
          numColumns={1}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          refreshing={isLoading}
          onRefresh={refresh}
        />
      </>
    )
  }
  return (
    <GenericScreen>
      <MaterialTab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: theme.colors.background },
          tabBarIndicatorStyle: { backgroundColor: theme.colors.primary },
        }}
      >
        {/* <MaterialTab.Screen 
          name="favorite" 
          options={{tabBarLabel: "Favorite"}}
          component={FavoriteFriendsTab} 
        /> */}
        <MaterialTab.Screen 
          name="online" 
          options={{tabBarLabel: "Online"}}
          component={OnlineFriendsTab} 
        />
        <MaterialTab.Screen 
          name="active" 
          options={{tabBarLabel: "Active"}}
          component={ActiveFriendsTab} 
        />
        <MaterialTab.Screen 
          name="offline" 
          options={{tabBarLabel: "Offline"}}
          component={OfflineFriendsTab} 
        />
      </MaterialTab.Navigator>
    </GenericScreen>
  );
}

const styles = StyleSheet.create({
  cardView: {
    padding: spacing.small,
    width: "100%",
  },
  selectGroupButton: {
    padding: spacing.small,
    marginTop: spacing.medium,
  },
});
