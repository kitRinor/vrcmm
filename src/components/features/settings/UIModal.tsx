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
import { ScrollView } from "react-native-gesture-handler";

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
  const { uiOptions } = setting.settings;

  const sectionItems: SectionProps[] = [
    {
      title: "Theme",
      items: [
        {
          icon: "theme-light-dark",
          title: "Dark Mode",
          description: "Select your color schema",
          leading: (
            <Text style={[globalStyles.text, { color: theme.colors.text }]}>
              {uiOptions.theme.colorSchema}
            </Text>
          ),
          onPress: () => {}
        },
        {
          icon: "colorize",
          title: "Accent Color",
          description: "Select your color schema",
          leading: (
            <Text style={[globalStyles.text, { color: theme.colors.text }]}>
              {uiOptions.theme.accentColor || "Default"}
            </Text>
          ),
          onPress: () => {}
        }
      ]
    },
    {
      title: "Layout",
      items: [
        {
          icon: "page-layout-body",
          title: "Home Tab",
          description: "Select layout modes for the home tab",
          leading: (
            <Text style={[globalStyles.text, { color: theme.colors.text }]}>
              {uiOptions.layouts.homeTabMode} 
            </Text>
          ),
          onPress: () => {}
        }
      ]
    },
    {
      title: "Color",
      items: [
        {
          icon: "account",
          title: "Friend Color",
          description: "Select your friends color theme",
          leading: <Text style={[globalStyles.text, { color: theme.colors.text }]}>{uiOptions.user.friendColor}</Text>
        },
        {
          icon: "group",
          title: "Favorite Friend Color",
          description: "Select your favorite-friends color theme",
          leading: <Text style={[globalStyles.text, { color: theme.colors.text }]}>{Object.values(uiOptions.user.favoriteFriendsColors).join(", ") || "Default"}</Text>,
        },
      ]
    },
  ]

  return (
    <GenericModal
      title="UI Settings"
      size="large"
      showCloseButton
      scrollable
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
              {section.items.map((item, idx) => (
                <SettingItem 
                  style={[styles.settingItem, { borderBottomColor: theme.colors.border }]}
                  key={`section-${index}-item-${idx}`}
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
