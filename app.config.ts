import { ConfigContext } from "@expo/config";

interface ProfileSwitch<T = any> {development: T; preview: T; production: T;}

const appIdentifier: ProfileSwitch<string> = {
  development: "dev.ktrn.vrcp.dev",
  preview: "dev.ktrn.vrcp.pre",
  production: "dev.ktrn.vrcp"
}
const appName: ProfileSwitch<string> = {
  development: "VRCP-dev",
  preview: "VRCP-pre",
  production: "VRCP"
}
const appIcon: ProfileSwitch<string> = {
  development: "./src/assets/images/icon-dev.png",
  preview: "./src/assets/images/icon.png",
  production: "./src/assets/images/icon.png"
}
const contact: ProfileSwitch<string> = {
  development: "dev@ktrn.dev",
  preview: "dev@ktrn.dev",
  production: "contact@ktrn.dev"
}

const profile = (process.env.BUILD_PROFILE || "development") as keyof ProfileSwitch; // must be "development" | "preview" | "production"

export default ({ config }: ConfigContext) => ({
    name: appName[profile],
    slug: "vrcp",
    version: "0.0.1",
    orientation: "portrait",
    icon: appIcon[profile],
    scheme: "vrcp", // This is used for deep linking (ex. schema://internal/link)
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    owner: "ktrn-dev",
    extra: {
      vrcmm: {// custom constants accessible via Constants.expoConfig.extra.vrcmm
        buildProfile: profile,
        contact: contact[profile],  
      },
      eas: {
        projectId: "5dcb6ea7-b710-4155-9dc5-e4c5a9ce160d"
      },
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: appIdentifier[profile],
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./src/assets/images/adaptive-icon-fg.png",
        backgroundImage: "./src/assets/images/adaptive-icon-bg.png",
        monochromeImage: "./src/assets/images/adaptive-icon-mono.png",
      },
      edgeToEdgeEnabled: true,
      package: appIdentifier[profile],
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./src/assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      "expo-secure-store",
      "expo-sqlite",
      "expo-font",
      [
        "expo-splash-screen",
        {
          image: "./src/assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    }
});
