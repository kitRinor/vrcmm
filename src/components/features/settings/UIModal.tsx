import GenericModal from "@/components/layout/GenericModal";
import IconSymbol from "@/components/view/icon-components/IconView";
import { SupportedIconNames } from "@/components/view/icon-components/utils";
import LoadingIndicator from "@/components/view/LoadingIndicator";
import globalStyles, { fontSize, spacing } from "@/configs/styles";
import { useCache } from "@/contexts/CacheContext";
import { useSetting } from "@/contexts/SettingContext";
import { Button, Text } from "@react-navigation/elements";
import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableHighlight, TouchableOpacity, View } from "react-native";
import SettingItem, { SettingItemProps } from "./components/SettingItem";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface SectionProps {
  title: string;
  items: SettingItemProps[];
}

const UIModal = ({ open, setOpen }: Props) => {
  const theme = useTheme();
  const setting = useSetting();
  const { homeTabMode, colorOptions } = setting.settings;

  const sectionItems: SectionProps[] = [
    {
      title: "Home Tab",
      items: [
        {
          icon: "home-work",
          title: "Layout mode",
          description: "Select the mode for the home tab",
          leading: (
            <Text style={[globalStyles.text, { color: theme.colors.text }]}>
              {homeTabMode}
            </Text>
          ),
          onPress: () => {}
        }
      ]
    },
    {
      title: "Color Options",
      items: [
        {
          icon: "palette",
          title: "Favorite Color",
          description: "Select your favorite color theme",
          leading: <></>
        },
        {
          icon: "palette",
          title: "User Color",
          description: "Select your user color theme",
          leading: <></>
        },
      ]
    }
  ]

  return (
    <GenericModal
      title="UI Settings"
      buttonItems={[{ title: "Close", onPress: () => setOpen(false), flex: 1 }]}
      open={open}
      onClose={() => setOpen(false)}
    >
      {sectionItems.map((section, index) => (
        <View key={`section-${index}`}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={[styles.sectionHeaderText, { color: theme.colors.text }]}>
              {section.title}
            </Text>
            <View style={[styles.sectionHeaderDivider, { borderBottomColor: theme.colors.border}]} />
          </View>
          <View style={styles.settingItemContainer}>
            {section.items.map((item) => (
              <SettingItem 
                style={[styles.settingItem, { borderBottomColor: theme.colors.border }]}
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                leading={item.leading}
              />
            ))}
          </View>
        </View>
      ))}
    </GenericModal>
  );
};

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  sectionHeaderText: {
    fontSize: fontSize.medium,
    // fontWeight: "bold",
  },
  sectionHeaderDivider: {
    flex: 1,
    // borderBottomWidth: 1,
    marginHorizontal: spacing.medium,
  },
  settingItemContainer : {
    padding: spacing.small,
  },
  settingItem: {
    borderBottomWidth: 1,
  },
});

export default UIModal;
