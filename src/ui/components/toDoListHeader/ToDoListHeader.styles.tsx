import {DynamicStyleSheet} from "react-native-dark-mode";

export const HeaderStyles = new DynamicStyleSheet({
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
        //width: 79,
        height: 19,
    
        //font-family: 'Roboto';
        fontStyle: "italic",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19,
    
        color: "#000000",
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
});
