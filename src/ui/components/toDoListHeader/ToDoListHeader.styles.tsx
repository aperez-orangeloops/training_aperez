import {DynamicStyleSheet} from "react-native-dark-mode";

export const HeaderStyles = new DynamicStyleSheet({
    containerTaskTitle: {
        flexGrow: 1,
        backgroundColor: "#FFFFFF",
      },
      containerTaskTitleDark: {
        flexGrow: 1,
        backgroundColor: "#000000",
      },
      textoT: {
        width: 268,
        height: 47,

        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        lineHeight: 47,
        color: "#000000",
      },
      textoTDark: {
        width: 268,
        height: 47,
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        lineHeight: 47,
        color: "#FFFFFF",
      },
      textoI: {
        height: 19,
        fontStyle: "italic",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19,
    
        color: "#000000",
      },
      textoIDark: {
        height: 19,
        fontStyle: "italic",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19,
    
        color: "#FFFFFF",
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
      containerHeaderDark: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        paddingVertical: 0,
        paddingHorizontal: 15,
        borderRadius: 5,
    
        width: 394,
        height: 71,
    
        backgroundColor: "#000000",
      },
});
