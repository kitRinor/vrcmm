import { DarkTheme, DefaultTheme } from "@react-navigation/native";

declare module "@react-navigation/native" {
  export function useTheme(): Theme;
}

export type Theme = typeof lightTheme | typeof darkTheme;

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#11acd2ff",
    error: "#ff2020ff",
    success: "#70ff50ff",
    warning: "#ffcc00ff",

    card: "#dfdfdfff",
    subText: "#888888ff",
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#11acd2ff",
    error: "#ff2020ff",
    success: "#70ff50ff",
    warning: "#ffcc00ff",
    
    card: "#222222ff",
    subText: "#888888ff",
  },
};

export { lightTheme, darkTheme };
