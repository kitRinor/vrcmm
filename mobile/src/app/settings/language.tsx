import GenericScreen from "@/components/layout/GenericScreen";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";



export default function LanguageSettings() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <GenericScreen>
      <Text style={{ color: theme.colors.text }}>language</Text>
    </GenericScreen>
  );
}
