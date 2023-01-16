import {DynamicStyleSheet, DynamicValue} from "react-native-dark-mode";
import { ITEM_WIDTH } from "./Carousels";


export const themedStyles = new DynamicStyleSheet({ 
    containerImagen: {
        backgroundColor: "#ED7203",
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      },
      image: {
        width: ITEM_WIDTH,
        height: 250,
      },
      containerVideo: {
        backgroundColor: "#ED7203",
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        height: 400,
      },
      header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
      },
      body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20
      },
      DotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        backgroundColor: new DynamicValue("rgb(42,45,51)", "rgb(255,255,255)"),
      }
});
