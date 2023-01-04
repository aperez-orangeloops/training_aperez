import React,{useState} from "react";
import {Text, View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import {UIHelper} from "../../utils/UIHelper";

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
        
        <TouchableOpacity onPress={() => {onFilterChange(ToDoListFilter.All)}}>
            <View style={ theme == 'light' ? (filter ==  ToDoListFilter.All ? styles.buttonN : styles.button)
                 : (filter ==  ToDoListFilter.All ? styles.buttonN : styles.buttonDark) }>
                <Text style={theme == 'light' ?  (filter == ToDoListFilter.All ? styles.textN : styles.text) : 
                            styles.textN}>{UIHelper.formatMessage("Welcome-AllButton")}</Text>
            </View>      
        </TouchableOpacity>  
        
        <TouchableOpacity onPress={() => {onFilterChange(ToDoListFilter.Active)}}>
            <View style={theme == 'light' ? filter == ToDoListFilter.Active ? styles.buttonN : styles.button
            : filter == ToDoListFilter.Active ? styles.buttonN : styles.buttonDark}>
                <Text style={theme == 'light' ?  filter == ToDoListFilter.Active ? styles.textN : styles.text : styles.textN}>{UIHelper.formatMessage("Welcome-ActiveButton")}</Text>
            </View>
        </TouchableOpacity>  
        
        <TouchableOpacity onPress={() => {onFilterChange(ToDoListFilter.Completed)}}>
            <View style={theme == 'light' ?  filter == ToDoListFilter.Completed ? styles.buttonN : styles.button :
                   filter == ToDoListFilter.Completed ? styles.buttonN : styles.buttonDark }>
                <Text style={theme == 'light' ?  filter == ToDoListFilter.Completed ? styles.textN : styles.text: styles.textN}>{UIHelper.formatMessage("Welcome-CompletedButton")}</Text>
            </View>
        </TouchableOpacity>  

        </View>

        <View style={styles.input}>
            <TextInput value={text} style={theme == 'light' ? styles.boxInput : styles.boxInputDark}  placeholder={UIHelper.formatMessage("Welcome-PlaceholderLabel")} 
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


