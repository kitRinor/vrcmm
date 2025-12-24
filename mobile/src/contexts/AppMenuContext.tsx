import GenericDialog from "@/components/layout/GenericDialog";
import { usePathname, useRouter } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BackHandler, Alert } from 'react-native';
// provide menu state globally

interface AppMenuContextType {
  openMenu: boolean; // use in GenericScreen, HeaderMenuButton
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleBack: () => void;
}
const Context = createContext<AppMenuContextType | undefined>(undefined);

const useAppMenu = () => {
  const context = useContext(Context);
  if (!context) throw new Error("useMenu must be used within a MenuProvider");
  return context;
}

const AppMenuProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  // close Drawer if open, else go back, else close app
  const handleBack = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else if (router.canGoBack()) {
      router.back();
    } else {
      Alert.alert(
        t('components.exitDialog.label'),
        t('components.exitDialog.message'), //
        [
          { text: t('components.exitDialog.button_no'), style: 'cancel' },
          { text: t('components.exitDialog.button_yes'), onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: true }
      );
    }
  };

  // Handle back button
  useEffect(() => {
    const onBackPress = () => {
      handleBack();
      return true; // prevent default behavior
    };
    const handler = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      handler.remove();
    };
  }, [openMenu, router]);

  return (
    <Context.Provider value={{
      openMenu,
      setOpenMenu,
      handleBack,
    }}>
      {children}
    </Context.Provider>
  );
}

export { AppMenuProvider, useAppMenu };
