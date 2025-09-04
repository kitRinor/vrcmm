import GenericModal from "@/components/layout/GenericModal";
import globalStyles, { spacing } from "@/config/styles";
import { Button, Text } from "@react-navigation/elements";
import { useTheme } from "@react-navigation/native";
import Constants from "expo-constants";
import { Platform } from "react-native";


interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DevelopperModal = ({ open, setOpen }: Props) => {
  const theme = useTheme();

  const devInfo = {
    version: Constants.expoConfig?.version,
    expoSdkVersion: Constants.expoConfig?.sdkVersion,
    deviceName: Constants.deviceName,
    platform : Platform.OS,
    packageName: Platform.select({
      android: Constants.expoConfig?.android?.package,
      ios: Constants.expoConfig?.ios?.bundleIdentifier,
    }),
    NODE_ENV: process.env.NODE_ENV,
  }
  return (
    <GenericModal open={open} onClose={() => setOpen(false)}>
      <Text style={[globalStyles.header, globalStyles.headerContainer, {color: theme.colors.text}]}>Developper Info</Text>
      <Text style={[globalStyles.text, {color: theme.colors.text}]}>{JSON.stringify(devInfo, null, 2)}</Text>
      <Button
        style={[globalStyles.button, {marginTop: spacing.medium, width: "100%"}]}
        color={theme.colors.text}
        onPress={()=>setOpen(false)}
      >
        close
      </Button>
    </GenericModal>
  );
}

export default DevelopperModal;