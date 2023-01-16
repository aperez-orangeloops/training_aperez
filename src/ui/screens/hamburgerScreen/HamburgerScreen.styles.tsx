import {DynamicStyleSheet, DynamicValue} from "react-native-dark-mode";

export const themedStyles = new DynamicStyleSheet({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homeContainer: {
    alignItems: "center",
    color: new DynamicValue("rgb(42,45,51)", "rgb(255,255,255)")
  },
  text: {
    color: new DynamicValue("rgb(42,45,51)", "rgb(255,255,255)"),
    fontSize: 40,
    height: 47,
    fontWeight: "bold",
  },
});
