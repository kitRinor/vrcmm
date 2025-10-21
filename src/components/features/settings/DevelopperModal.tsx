import GenericModal from "@/components/layout/GenericModal";
import { useTheme } from "@react-navigation/native";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DevelopperModal = ({ open, setOpen }: Props) => {
  const theme = useTheme();

  return (
    <GenericModal
      title="Developper Options"
      showCloseButton
      size="large"
      open={open}
      onClose={() => setOpen(false)}
    >
      <></>
    </GenericModal>
  );
};

export default DevelopperModal;
