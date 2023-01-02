import React from "react";
import {Text, View} from "react-native";
import {useState} from "react";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { FooterStyles } from "./ToDoListFooter.styles";
import IconPlus from "../../assets/add-outline (1) 1.svg" 
import { ToDo } from "core/models/ToDo";


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
 

  enum ToDoListFilter {
    All, 
    Active,
    Completed,
  }

  const createTask = () => {
    let t = text.trim();
    if (t == '' || t == ' '){
    }
    else{
    task.title = t;
    task.id = id.toString();
    props.onToDoCreated(task);
    setText("");
    let i = id;
    i++;
    setId(i);
    }
  } 
  

  return (
    <View style={props.theme == 'light' ? styles.footer : styles.footerDark}>
        <View style={props.theme == 'light' ? styles.buttonscontainer : styles.buttonscontainerDark}>
        
        <TouchableOpacity onPress={() => {props.onFilterChange(ToDoListFilter.All)}}>
            <View style={ props.theme == 'light' ? (props.filter ==  ToDoListFilter.All ? [styles.buttonN, styles.buttonA ] : [styles.button, styles.buttonA])
                 : (props.filter ==  ToDoListFilter.All ? [styles.buttonN, styles.buttonA] : [styles.buttonDark, styles.buttonA]) }>
                <Text style={props.theme == 'light' ?  (props.filter == ToDoListFilter.All ? styles.textN : styles.text) : 
                            styles.textN}>All</Text>
            </View>      
        </TouchableOpacity>  
        
        <TouchableOpacity onPress={() => {props.onFilterChange(ToDoListFilter.Active)}}>
            <View style={ props.theme == 'light' ? props.filter == ToDoListFilter.Active ? [styles.buttonN, styles.buttonB] : [styles.button, styles.buttonB]
            : props.filter == ToDoListFilter.Active ? [styles.buttonN, styles.buttonB] : [styles.buttonDark, styles.buttonB]}>
                <Text style={props.theme == 'light' ?  props.filter == ToDoListFilter.Active ? styles.textN : styles.text : styles.textN}>Active</Text>
            </View>
        </TouchableOpacity>  
        
        <TouchableOpacity onPress={() => {props.onFilterChange(ToDoListFilter.Completed)}}>
            <View style={props.theme == 'light' ?  props.filter == ToDoListFilter.Completed ? [styles.buttonN, styles.buttonC] : [styles.button, styles.buttonC] :
                   props.filter == ToDoListFilter.Completed ? [styles.buttonN, styles.buttonC] : [styles.buttonDark, styles.buttonC] }>
                <Text style={props.theme == 'light' ?  props.filter == ToDoListFilter.Completed ? styles.textN : styles.text: styles.textN}>Completed</Text>
            </View>
        </TouchableOpacity>  

        </View>

        <View style={styles.input}>
            <TextInput value={text} style={props.theme == 'light' ? styles.boxInput : styles.boxInputDark}  placeholder={"Write a task"} 
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


