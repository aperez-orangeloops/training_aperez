import {DynamicStyleSheet} from "react-native-dark-mode";

//import {variables} from "../../style/variables";

export const FooterStyles = new DynamicStyleSheet({
  footer: {
    width: 394,
    height: 110,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    //alignSelf: 'flex-end',

    backgroundColor: "#fff",
  },
  footerDark: {
    width: 394,
    height: 110,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    //alignSelf: 'flex-end',

    backgroundColor: "#000000",
  },
  buttonscontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#fff",

    width: 134,
    height: 29,
  },
  buttonscontainerDark: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#000000",

    width: 134,
    height: 29,
  },
  buttonN: {
    display: "flex",
    //flexDirection: 'row',
    justifyContent: "center",
    //alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    //gap: 5,

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
  buttonA:{
    width: 39,
  },
  buttonB:{
    width: 65,
  },
  buttonC:{
    width: 100,
  },
  text: {
    //width: 19,
    height: 19,

    //fontFamily: 'Roboto';
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },
  textDark: {
    //width: 19,
    height: 19,

    //fontFamily: 'Roboto';
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },
  
  textN: {
    //width: 19,
    height: 19,

    //fontFamily: 'Roboto';
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  boxInput:{
    display: "flex",
    width: 314,
    height: 40,
    //marginLeft: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    paddingHorizontal : 10,
  },
  boxInputDark:{
    display: "flex",
    width: 314,
    height: 40,
    //marginLeft: 20,
    backgroundColor: "#000000",
    borderRadius: 5,
    borderColor: "#4E4E4E",
    borderWidth: 1,
    paddingHorizontal : 10,
  },
  buttonPlus:{
    display: "flex",
    width: 40,
    height: 40,
    marginLeft: 10,
    backgroundColor: "#ED7203",
    borderRadius: 5,
  },
  input:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
});