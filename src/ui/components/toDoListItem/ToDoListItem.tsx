import React from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";

import {toDoStyles} from "./ToDoListItem.styles";

import CircleDone from "../../assets/checkmark-circle-outline 1.svg"
import Circle from "../../assets/ellipse 1.svg" 

export const ToDoListItem = (props : any) => {
  const styles = useDynamicStyleSheet(toDoStyles);
  const {theme, todo,onCompletedChange} = props;

  return (
    <View>           
      <View style={styles.container }>
        <View style={styles.organize}>
          <TouchableOpacity onPress={() => {onCompletedChange(todo.completed)}}>
            {todo.completed &&
              <CircleDone /> 
            }
            { !todo.completed &&
                <Circle/>
            }
          </TouchableOpacity>
          <Text style={theme == 'light' ? (todo.completed ? styles.textDone : styles.textS) : 
                (todo.completed ? styles.textDoneDark : styles.textSDark) }>{todo.title} </Text>
        </View>
        <View style={styles.rectangle}></View>
      </View>
    </View>
  );
};
