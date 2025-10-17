import globalStyles, { fontSize, radius, spacing } from "@/configs/styles";
import { useTheme } from "@react-navigation/native";
import { Modal, StyleSheet, View } from "react-native";
import { ButtonItemForFooter } from "./type";
import { Button, Text } from "@react-navigation/elements";
import { useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  buttonItems?: ButtonItemForFooter[];
  children: React.ReactNode;
}

const GenericModal = ({ open, onClose, children, buttonItems, title }: Props) => {
  const theme = useTheme();
  return (
    <Modal
      visible={open}
      animationType="fade"
      backdropColor={"#88888833"}
      onRequestClose={onClose}
    >
      {/* GestureHandlerRootView is needed for DraggableFlatList */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.modalRoot}>
          <View
            style={[
              styles.modalContainer,
            { backgroundColor: theme.colors.background },
            ]}
          >
            {title && (
              <Text
                style={[
                  styles.title,
                  { color: theme.colors.text, backgroundColor: theme.colors.card },
                ]}
              >
                {title}
              </Text>
            )}
            <View style={styles.childContainer}>
              {children}
            </View>
            <View style={styles.footer}>
              {buttonItems?.map((item, index) => (
                <Button
                  key={index}
                  style={[styles.footterButton, {
                    flex: item.flex,
                    width: item.width,
                  }]}
                  onPress={item.onPress}
                  color={item.color || theme.colors.text}
                  disabled={item.disabled}
                >
                  {item.title}
                </Button>
              ))}
            </View>
          </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalRoot: {
    // attach to Root-View in Modal
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    maxHeight: "90%",
    minHeight: 100,
    borderRadius: radius.small,
    overflow: "hidden",

    // borderColor: 'blue',
    // borderWidth: 1,
    // borderStyle: 'solid',
  },
  title: {
    fontSize: fontSize.medium,
    fontWeight: "bold",
    width: '100%',
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.large,
    textAlign: "left",
  },
  childContainer: {
    padding: spacing.large
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.small,
    padding: spacing.small,
  },
  footterButton: {
    borderRadius: radius.button,
  },
});

export default GenericModal;
