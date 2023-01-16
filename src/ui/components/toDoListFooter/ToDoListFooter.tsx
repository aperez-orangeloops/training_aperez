import React,{useState} from "react";
import {View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import {UIHelper} from "../../utils/UIHelper";

import { ToDo } from "core/models/ToDo";
import { ButtonFooter } from "../buttonFooter/ButtonFooter";

import { FooterStyles } from "./ToDoListFooter.styles";

import IconPlus from "../../assets/add-outline (1) 1.svg" 


export enum ToDoListFilter {
  All, 
  Active,
  Completed,
}

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
 

  const createTask = () => {
    let t = text.trim();
    if (t == '' || t == ' ')
      return;
  
    task.title = t;
    task.id = id.toString();
    onToDoCreated(task);
    setText("");
    setId(id+1);
  } 

  return (
    <View style={theme == 'light' ? styles.footer : styles.footerDark}>
        <View style={theme == 'light' ? styles.buttonscontainer : styles.buttonscontainerDark}>

          <ButtonFooter filter={filter} onFilterChange={onFilterChange} type={ToDoListFilter.All} theme={theme} name={"ToDoListFooter-AllButton"}/>
          <ButtonFooter filter={filter} onFilterChange={onFilterChange} type={ToDoListFilter.Active} theme={theme} name={"ToDoListFooter-ActiveButton"}/>     
          <ButtonFooter filter={filter} onFilterChange={onFilterChange} type={ToDoListFilter.Completed} theme={theme} name={"ToDoListFooter-CompletedButton"}/>

        </View>

        <View style={styles.input}>
            <TextInput value={text} style={theme == 'light' ? styles.boxInput : styles.boxInputDark}  placeholder={UIHelper.formatMessage("ToDoListFooter-PlaceholderLabel")} 
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
