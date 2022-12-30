import {DynamicStyleSheet} from "react-native-dark-mode";

//import {variables} from "../../style/variables";

export const themedStyles = new DynamicStyleSheet({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 20,
    borderRadius: 20,
 
    width: 394,
    height: 876,

    backgroundColor: "#FFFFFF",
  },
  taskStyles:{
    //alignSelf: "flex-start",
    height: 590,
    backgroundColor: "#fff",
  },

  footer: {
    width: 394,
    height: 110,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    //alignSelf: 'flex-end',

    backgroundColor: "#DDDDDD",
  },
  buttonscontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //paddingVertical: 5,
    //paddingHorizontal: 10,
    //gap: 10,

    backgroundColor: "#DDDDDD",

    width: 134,
    height: 29,
  },
  rectangle: {
    width: 394,
    height: 1,
    backgroundColor: "#DDDDDD",
    //marginTop: 25.5,
  },
  Empty:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 200,
  },
  TextE:{
    //width: 268,
    height: 47,
    //fontFamily: 'Roboto',
    fontStyle: "normal",
    //fontWeight: "bold",
    fontSize: 20,
    //lineHeight: 47,
    color: "#000000",
  }
});

{
  /*
container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    ...variables.headingOne,
    marginBottom: 100,

    textAlign: "center",
  },
  signUpButton: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "80%",
    width: 200,
  },
  signInHeading: {
    marginTop: 10,

    textAlign: "center",
  },
  signInButton: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  signInText: {
    ...variables.link,
    textAlign: "center",
  },
*/
}
