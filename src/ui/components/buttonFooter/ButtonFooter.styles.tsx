import {DynamicStyleSheet} from "react-native-dark-mode";

export const buttonFooterStyles = new DynamicStyleSheet({
  button: {
    display: "flex",
    //flexDirection: 'row',
    justifyContent: "center",
    //alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    //gap: 5,

    width: 39,
    height: 29,
    marginLeft: 20,
    backgroundColor: "#ED7203",
    borderRadius: 5,
  },
  text: {
    width: 19,
    height: 19,

    //fontFamily: 'Roboto';
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
});
