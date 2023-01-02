import React from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import CircleDone from "../../assets/checkmark-circle-outline 1.svg"
import Circle from "../../assets/ellipse 1.svg" 
import { ToDo } from "core/models/ToDo";
import {toDoStyles} from "./ToDoListItem.styles";


export const ToDoListItem = (prop : {theme: "light" | "dark" | null | undefined, todo : ToDo,onCompletedChange :(completed: boolean) => void}) => {
  const styles = useDynamicStyleSheet(toDoStyles);
  

  return (
    <View>            
      <View style={styles.container }>
        <View style={styles.organize}>
          <TouchableOpacity onPress={() => {prop.onCompletedChange(prop.todo.completed)}}>
            { prop.todo.completed &&
              <CircleDone /> 
            }
            { !prop.todo.completed &&
                <Circle/>
            }
          </TouchableOpacity>
          <Text style={prop.theme == 'light' ? (prop.todo.completed ? styles.textDone : styles.textS) : (prop.todo.completed ? styles.textDoneDark : styles.textSDark) }>{prop.todo.title} </Text>
        </View>
        <View style={styles.rectangle}></View>
      </View>
    </View>
  );
};
