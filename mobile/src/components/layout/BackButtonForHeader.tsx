import { spacing } from "@/configs/styles";
import { useRouter } from "expo-router";
import IconButton from "../view/icon-components/IconButton";
import { StackHeaderLeftProps } from "@react-navigation/stack";
import { useAppMenu } from "@/contexts/AppMenuContext";

const BackButtonForHeader = (props: StackHeaderLeftProps) => {
  const router = useRouter();
  const { handleBack: closeMenuOrGoBack } = useAppMenu();
  return (
    <IconButton
      style={{ paddingRight: spacing.large }}
      name="chevron-left"
      onPress={closeMenuOrGoBack}
    />
  );
};

export default BackButtonForHeader;
