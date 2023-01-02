import {DynamicStyleSheet} from "react-native-dark-mode";

export const buttonFooterStyles = new DynamicStyleSheet({
  button: {
    display: "flex",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,

    width: 39,
    height: 29,
    marginLeft: 20,
    backgroundColor: "#ED7203",
    borderRadius: 5,
  },
  text: {
    width: 19,
    height: 19,

    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
});
