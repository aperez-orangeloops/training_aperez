import React,{useState} from "react";
import {Text, View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { ToDo } from "core/models/ToDo";

import { FooterStyles } from "./ToDoListFooter.styles";

import IconPlus from "../../assets/add-outline (1) 1.svg" 



export const ToDoListFooter = (props: any) => {
  const styles = useDynamicStyleSheet(FooterStyles);
  const [text , setText] = useState('');
  const [id, setId] = useState(1);
  let task : ToDo;
  task = {
    title: '',
    completed: false,
    id: '0',
  };
  const {theme, filter, onFilterChange, onToDoCreated} = props;
 

  enum ToDoListFilter {
    All, 
    Active,
    Completed,
  }

  const createTask = () => {
    let t = text.trim();
    if (t == '' || t == ' '){
      return;
    }
    task.title = t;
    task.id = id.toString();
    onToDoCreated(task);
    setText("");
    setId(id+1);
  } 
  

  return (
    <View style={theme == 'light' ? styles.footer : styles.footerDark}>
        <View style={theme == 'light' ? styles.buttonscontainer : styles.buttonscontainerDark}>
        
        <TouchableOpacity onPress={() => {onFilterChange(ToDoListFilter.All)}}>
            <View style={ theme == 'light' ? (filter ==  ToDoListFilter.All ? [styles.buttonN, styles.buttonA ] : [styles.button, styles.buttonA])
                 : (filter ==  ToDoListFilter.All ? [styles.buttonN, styles.buttonA] : [styles.buttonDark, styles.buttonA]) }>
                <Text style={theme == 'light' ?  (filter == ToDoListFilter.All ? styles.textN : styles.text) : 
                            styles.textN}>All</Text>
            </View>      
        </TouchableOpacity>  
        
        <TouchableOpacity onPress={() => {onFilterChange(ToDoListFilter.Active)}}>
            <View style={theme == 'light' ? filter == ToDoListFilter.Active ? [styles.buttonN, styles.buttonB] : [styles.button, styles.buttonB]
            : filter == ToDoListFilter.Active ? [styles.buttonN, styles.buttonB] : [styles.buttonDark, styles.buttonB]}>
                <Text style={theme == 'light' ?  filter == ToDoListFilter.Active ? styles.textN : styles.text : styles.textN}>Active</Text>
            </View>
        </TouchableOpacity>  
        
        <TouchableOpacity onPress={() => {onFilterChange(ToDoListFilter.Completed)}}>
            <View style={theme == 'light' ?  filter == ToDoListFilter.Completed ? [styles.buttonN, styles.buttonC] : [styles.button, styles.buttonC] :
                   filter == ToDoListFilter.Completed ? [styles.buttonN, styles.buttonC] : [styles.buttonDark, styles.buttonC] }>
                <Text style={theme == 'light' ?  filter == ToDoListFilter.Completed ? styles.textN : styles.text: styles.textN}>Completed</Text>
            </View>
        </TouchableOpacity>  

        </View>

        <View style={styles.input}>
            <TextInput value={text} style={theme == 'light' ? styles.boxInput : styles.boxInputDark}  placeholder={"Write a task"} 
                onSubmitEditing={createTask} onChangeText={text => setText(text)} ></TextInput> 
           
            <TouchableOpacity onPress={createTask} >
                <View style={styles.buttonPlus}>
                    <IconPlus/>
                </View>
            </TouchableOpacity>

        </View>

  </View>
  );
};


