import React from "react";
import {StyleSheet, Text, View} from "react-native";
//import {ToDo} from "../../../core/models/ToDo";
//import {useDynamicStyleSheet} from "react-native-dark-mode";

// onCompletedChange :(completed: boolean) => void
export const ToDoListHeader = (props) => {
  //const styles = useDynamicStyleSheet(toDoStyles);

  return (
    <View>
      <Text style={styles.textoI}>{props.amount} items left </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
