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
    flexWrap: "wrap",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 8.75,

    color: "#000000",
  },
  textSDark: {
    width: 300,
    flexWrap: "wrap",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 8.75,

    color: "#FFFFFF",
  },
  rectangle: {
    width: 364,
    height: 1,
    backgroundColor: "#DDDDDD",
    marginTop: 25.5,
  },
  organize: {
    flexDirection: "row",
    alignItems: "center",
  },
  textDone: {
    width:300,
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 8.75,
    flexWrap: "wrap",

    textDecorationLine: "line-through",

    color: "#000000",
  },
  textDoneDark: {
    width:300,
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 8.75,
    flexWrap: "wrap",

    textDecorationLine: "line-through",

    color: "#FFFFFF",
  },
});
