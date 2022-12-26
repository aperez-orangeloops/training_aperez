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
  containerHeader: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    paddingVertical: 0,
    paddingHorizontal: 15,
    borderRadius: 5,

    width: 394,
    height: 71,

    backgroundColor: "#FFFFFF",
  },
  containerTaskTitle: {
    //flex: "none",
    //order: 0,
    flexGrow: 1,
    backgroundColor: "#FFFFFF",

    //alignItems: 'center',
  },
  textoT: {
    width: 268,
    height: 47,
    //fontFamily: 'Roboto',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 40,
    lineHeight: 47,
    color: "#000000",
  },
  textoI: {
    width: 79,
    height: 19,

    //font-family: 'Roboto';
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,

    color: "#000000",
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

  circle: {
    //position: 'absolute',
    width: 32.5,
    height: 32.5,
    borderColor: "#888888",
    borderWidth: 3.75,
    borderRadius: 16.25,
  },
  organize: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleDone: {
    width: 32.5,
    height: 32.5,
    borderColor: "#ED7203",
    borderWidth: 3.75,
    borderRadius: 16.25,
  },

  rectangle: {
    width: 364,
    height: 1,
    backgroundColor: "#DDDDDD",
    marginTop: 25.5,
  },
  containerTask: {
    marginTop: 25.5,
    marginLeft: 16.25,
    flexDirection: "column",
    alignItems: "flex-start",
  },
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
