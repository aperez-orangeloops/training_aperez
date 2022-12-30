import React from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";

//import {ToDo} from "../../../core/models/ToDo";
import {toDoStyles} from "./ToDoListItem.styles";

// onCompletedChange :(completed: boolean) => void
export const ToDoListItem = (prop: any) => {
  const styles = useDynamicStyleSheet(toDoStyles);
  

  return (
    <View>            
      <View style={styles.container}>
        <View style={styles.organize}>
          <TouchableOpacity key={prop.id} onPress={() => {prop.onCompletedChange(prop.completed)}}>
            <View style={prop.completed ? styles.circleDone : styles.circle}></View>
          </TouchableOpacity>
          <Text style={prop.completed ? styles.textDone : styles.textS}>{prop.title} </Text>
        </View>
        <View style={styles.rectangle}></View>
      </View>
    </View>
  );
};
