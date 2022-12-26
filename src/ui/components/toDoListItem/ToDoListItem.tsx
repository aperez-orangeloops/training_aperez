import React from "react";
import {Text, View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";

import {ToDo} from "../../../core/models/ToDo";
import {toDoStyles} from "./ToDoListItem.styles";

// onCompletedChange :(completed: boolean) => void
export const ToDoListItem = (prop: ToDo, onCompletedChange: (completed: number) => void) => {
  const styles = useDynamicStyleSheet(toDoStyles);

  return (
    <View>
      <Text style={prop.completed ? styles.textDone : styles.textS}>{prop.title} </Text>
    </View>
  );
};
