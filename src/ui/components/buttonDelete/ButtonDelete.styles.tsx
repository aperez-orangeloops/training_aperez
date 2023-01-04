import {DynamicStyleSheet} from "react-native-dark-mode";


export const buttonDeleteStyles = new DynamicStyleSheet({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,

    width: 96,
    height: 40,

    backgroundColor: "#F05757",
    borderRadius: 5,
  },
  text: {
    paddingHorizontal: 2,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,

    color: "#FFFFFF",
  },
});
