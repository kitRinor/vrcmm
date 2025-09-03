import { StyleSheet } from "react-native";

const fontWeight = {
  light: '300',
  medium: '500',
  bold: '700',
  black: '900',
};
const fontSize = {
  small: 12,
  medium: 16,
  large: 20,
};
const spacing = {
  mini: 2,
  small: 6,
  medium: 10,
  large: 15,
};
const radius = {
  small: 8,
  medium: 16,
  large: 24,
  all: 1000,
}

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.small,
  },
  containerCentered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.small,
  },
  containerVertical: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    padding: spacing.small,
  },
  containerHorizontal: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    padding: spacing.small,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  text: {
    padding: spacing.medium,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    padding: spacing.medium,
  },
  button: {
    padding: spacing.medium,
    borderRadius: 5,
  },


  // repeating items except for the first one
  repeatingitemVertical: {
    marginTop: spacing.small,
  },
  repeatingitemHorizontal: {
    marginLeft: spacing.small,
  },
})



export default globalStyles;
export { fontWeight, fontSize, spacing, radius };