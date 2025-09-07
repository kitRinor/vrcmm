import GenericScreen from "@/components/layout/GenericScreen";
import globalStyles from "@/config/styles";
import { useTheme } from "@react-navigation/native";
import Storage from 'expo-sqlite/kv-store';
import { useEffect, useState } from "react";
import { Text } from "react-native";


const TODO_TEXT = `
[ToDo]  
  - webhook for Feed,
  - globally state controll
    - how to handle data pagenation?
    - how to handle data update?
  - push notification for Feed update
`;

export default function Home() {
  const theme = useTheme();

  const [authCookie, setAuthCookie] = useState<{
    authCookie?: string;
    twoFactorAuthCookie?: string;
  }>();

  useEffect(() => {
    Storage.getItem("auth_authCookie").then(v => {
      setAuthCookie(prev => ({ ...prev, authCookie: v || undefined }));
    });
    Storage.getItem("auth_2faCookie").then(v => {
      setAuthCookie(prev => ({ ...prev, twoFactorAuthCookie: v || undefined }));
    });
  },[]);

  return (
    <GenericScreen>
      <Text style={[globalStyles.text, {color: theme.colors.subText, fontSize: 20}]}>
        Favorite friends and their Locations,
      </Text>

      <Text style={[globalStyles.text, {color: theme.colors.text}]}>
        {TODO_TEXT}
      </Text>

      <Text style={[globalStyles.text, {color: theme.colors.text}]}>
        {authCookie?.authCookie ?? "Auth not set"}
      </Text>
      <Text style={[globalStyles.text, {color: theme.colors.text}]}>
        {authCookie?.twoFactorAuthCookie ?? "2FA not set"}
      </Text>
    </GenericScreen>
  );
}

