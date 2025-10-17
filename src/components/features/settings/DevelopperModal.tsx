import GenericModal from "@/components/layout/GenericModal";
import globalStyles, { spacing } from "@/configs/styles";
import { useDB } from "@/contexts/DBContext";
import { useVRChat } from "@/contexts/VRChatContext";
import { routeToSearch } from "@/libs/route";
import { Button, Text } from "@react-navigation/elements";
import { useTheme } from "@react-navigation/native";
import Constants from "expo-constants";
import * as FileSystem from "expo-file-system";
import { navigate } from "expo-router/build/global-state/routing";
import { useEffect, useMemo, useState } from "react";
import { Platform, View } from "react-native";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DevelopperModal = ({ open, setOpen }: Props) => {
  const theme = useTheme();

  return (
    <GenericModal
      title="Developper Options"
      buttonItems={[{ title: "Close", onPress: () => setOpen(false), flex: 1 }]}
      open={open}
      onClose={() => setOpen(false)}
    >
      <></>
    </GenericModal>
  );
};

export default DevelopperModal;
