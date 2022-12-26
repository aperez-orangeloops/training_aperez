import {DynamicStyleSheet} from "react-native-dark-mode";

export const toDoStyles = new DynamicStyleSheet({
  container: {
    marginTop: 25.5,
    marginLeft: 16.25,
    flexDirection: "row",
    alignItems: "center",
  },
  textS: {
    width: 116,
    height: 19,

    //fontFamily: 'Roboto',
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 8.75,

    //textDecorationLine: 'line-through',

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
    width: 116,
    height: 19,

    //fontFamily: 'Roboto',
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 8.75,

    textDecorationLine: "line-through",

    color: "#000000",
  },
});
