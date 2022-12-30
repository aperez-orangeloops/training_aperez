import React from "react";
import {Text, View} from "react-native";
import {useState} from "react";
import {ToDo} from "../../../core/models/ToDo";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { FooterStyles } from "./ToDoListFooter.styles";

// onCompletedChange :(completed: boolean) => void
export const ToDoListFooter = (props:any) => {
  const styles = useDynamicStyleSheet(FooterStyles);
  const [text , setText] = useState('');
  let task = {
    title: '',
    completed: false,
    id: Math.random().toString(),
  };
  const [empty, setEmpty] = useState(false);

  enum ToDoListFilter {
    All, 
    Active,
    Completed,
  }

  const createTask = () => {
    text.trim();
    if (text == '' || text == ' '){
    }
    else{
    task.title = text;
    props.onToDoCreated(task);
    setText("");
    }
    setEmpty(true);
  } 
  

  return (
    <View style={styles.footer}>
        <View style={styles.buttonscontainer}>
        <TouchableOpacity onPress={() => {props.onFilterChange(ToDoListFilter.All)}}>
            <View style={props.filter == ToDoListFilter.All ? [styles.buttonN, styles.buttonA] : [styles.button, styles.buttonA]}>
                <Text style={props.filter == ToDoListFilter.All ? styles.textN : styles.text}>All</Text>
            </View>
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => {props.onFilterChange(ToDoListFilter.Active)}}>
            <View style={props.filter == ToDoListFilter.Active ? [styles.buttonN, styles.buttonB] : [styles.button, styles.buttonB]}>
                <Text style={props.filter == ToDoListFilter.Active ? styles.textN : styles.text}>Active</Text>
            </View>
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => {props.onFilterChange(ToDoListFilter.Completed)}}>
            <View style={props.filter == ToDoListFilter.Completed ? [styles.buttonN, styles.buttonC] : [styles.button, styles.buttonC]}>
                <Text style={props.filter == ToDoListFilter.Completed ? styles.textN : styles.text}>Completed</Text>
            </View>
        </TouchableOpacity>  

        </View>

        <View style={styles.input}>

            <TextInput value={empty ? '' : undefined} style={styles.boxInput}  placeholder={"Write a task"} 
                onSubmitEditing={createTask} onChangeText={(text) => {{setEmpty(false)} {setText(text)}} } ></TextInput> 
           
            <TouchableOpacity onPress={createTask} >
                <View style={styles.buttonPlus}>
                </View>
            </TouchableOpacity>
        </View>

  </View>
  );
};

{/*
<TextInput value={text} style={styles.boxInput}  placeholder={"Write a task"} 
                onSubmitEditing={createTask} onChangeText={text => setText(text)} ></TextInput> 
           
            <TouchableOpacity onPress={createTask } >
                <View style={styles.buttonPlus}>
                </View>
            </TouchableOpacity>
*/}