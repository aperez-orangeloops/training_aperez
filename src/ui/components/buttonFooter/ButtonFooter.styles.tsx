import {DynamicStyleSheet} from "react-native-dark-mode";

export const buttonFooterStyles = new DynamicStyleSheet({
  buttonN: {
    display: "flex",
    justifyContent: "center",

    paddingVertical: 5,
    paddingHorizontal: 10,

    height: 29,
    marginLeft: 20,
    backgroundColor: "#ED7203",
    borderRadius: 5,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,

    height: 29,
    marginLeft: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  buttonDark: {
    display: "flex",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,

    height: 29,
    marginLeft: 20,
    backgroundColor: "#000000",
    borderRadius: 5,
  },
  text: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },
  textDark: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },
  
  textN: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
});
