import {DynamicStyleSheet} from "react-native-dark-mode";

//import {variables} from "../../style/variables";

export const buttonDeleteStyles = new DynamicStyleSheet({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    //gap: 5,

    width: 96,
    height: 40,

    backgroundColor: "#F05757",
    borderRadius: 5,
  },
  text: {
    width: 41,
    height: 19,

    //font-family: 'Roboto';
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,

    color: "#FFFFFF",
  },
});
