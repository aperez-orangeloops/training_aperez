import {DynamicStyleSheet} from "react-native-dark-mode";


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
  containerDark:{
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

    backgroundColor: "#0000",

  },
  taskStyles:{
    height: 590,
    backgroundColor: "#fff",
  },
  taskStylesDark:{
    height: 590,
    backgroundColor: "#000",
  },
  footer: {
    width: 394,
    height: 110,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",


    backgroundColor: "#DDDDDD",
  },
  buttonscontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",


    backgroundColor: "#DDDDDD",

    width: 134,
    height: 29,
  },
  rectangle: {
    width: 394,
    height: 1,
    backgroundColor: "#DDDDDD",

  },
  rectangleDark:{
    width: 394,
    height: 1,
    backgroundColor: "#4E4E4E",
  },
  Empty:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 200,
  },
  TextE:{
    height: 47,
    fontStyle: "normal",
    fontSize: 20,
    color: "#000000",
  },
  TextEDark:{
    height: 47,
    fontStyle: "normal",
    fontSize: 20,
    color: "#ffff",
  },
});


