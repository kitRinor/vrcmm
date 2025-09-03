import { Alert } from "react-native";

type Ecode = `E-M${string}`;

export function callError(code: Ecode, message?: string) {
  Alert.alert("Error", message || "An unknown error occurred, please contact and tell support to this code: " + code);
}
