import {DynamicStyleSheet} from "react-native-dark-mode";

export const HeaderStyles = new DynamicStyleSheet({
    containerTaskTitle: {
        flexGrow: 1,
        backgroundColor: "#FFFFFF",
        marginLeft: 10,
      },
      containerTaskTitleDark: {
        flexGrow: 1,
        backgroundColor: "#000000",
        marginLeft: 10,
      },
      textoT: {
        height: 47,

        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        lineHeight: 47,
        color: "#000000",
      },
      textoTDark: {
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
        marginLeft: 55,
    
        color: "#000000",
      },
      textoIDark: {
        height: 19,
        fontStyle: "italic",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19,
        marginLeft: 55,
    
        color: "#FFFFFF",
      },
      topContainer:{
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      },
      containerHeader: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        paddingVertical: 0,
        paddingHorizontal: 15,
        borderRadius: 5,
    
        width: 394,
        height: 71,
    
        backgroundColor: "#FFFFFF",
      },
      containerHeaderDark: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        paddingVertical: 0,
        paddingHorizontal: 15,
        borderRadius: 5,
    
        width: 394,
        height: 71,
    
        backgroundColor: "#000000",
      },
});
