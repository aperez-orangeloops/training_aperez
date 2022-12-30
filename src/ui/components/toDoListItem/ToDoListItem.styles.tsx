import {DynamicStyleSheet} from "react-native-dark-mode";

export const toDoStyles = new DynamicStyleSheet({
  container: {
    width: "100%",
    marginTop: 25.5,
    marginLeft: 16.25,
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap : "wrap",
  },
  textS: {
    width: 300,
    //height: 19,
    flexWrap: "wrap",

    //fontFamily: 'Roboto',
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 8.75,

    color: "#000000",
  },
  rectangle: {
    width: 364,
    height: 1,
    backgroundColor: "#DDDDDD",
    marginTop: 25.5,
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
  textDone: {
    width:300,
    //height: 19,

    //fontFamily: 'Roboto',
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 8.75,
    flexWrap: "wrap",

    textDecorationLine: "line-through",

    color: "#000000",
  },
});
