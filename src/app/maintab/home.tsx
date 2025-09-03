import GenericScreen from "@/components/G@/src/api/vrchat";
import globalStyles from "@/config/styles";
import texts from "@/config/texts";
import useAuth from "@/src/contexts/AuthContext";
import useVRChat from "@/src/contexts/VRChatContext";
import { Button } from "@react-navigation/elements";
import { useTheme } from "@react-navigation/native";
import { navigate } from "expo-router/build/global-state/routing";
import { StyleSheet, Text } from "react-native";

export default function Home() {
  const vrc = useVRChat();
  const auth = useAuth();
  const theme = useTheme();


  return (
    <GenericScreen>
      <Text style={[globalStyles.text, {color: theme.colors.text}]}>{texts.welcome}</Text>
      <Text style={[globalStyles.text, {color: theme.colors.subText, fontSize: 20}]}>
        Favorite friends and their Locations,
      </Text>
      <Button onPress={() => {navigate("/_sitemap")}} >SiteMap</Button>

      <Text style={[globalStyles.text, {color: theme.colors.subText}]}>
        tmp
      </Text>
    </GenericScreen>
  );
}

const styles = StyleSheet.create({
  
})

