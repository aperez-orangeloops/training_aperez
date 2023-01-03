import * as React from "react";
import {useState} from "react";
import {View,ScrollView, Text} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import {SafeAreaView} from "react-native-safe-area-context";
import { Appearance } from "react-native";

import {ToDo} from "../../../core/models/ToDo";
import {ToDoListHeader} from "../../components/toDoListHeader/ToDoListHeader";
import {ToDoListItem} from "../../components/toDoListItem/ToDoListItem";
import {ToDoListFooter} from "../../components/toDoListFooter/ToDoListFooter";

import {NavigatorRoutes, Routes, StackScreenProps} from "../../navigation/Routes";

import {themedStyles} from "./Welcome.styles";


export type WelcomeProps = StackScreenProps<NavigatorRoutes<NavigatorRoutes<Routes>["Screens"]>["Public"], "Welcome">;

export const Welcome = () => {
  const styles = useDynamicStyleSheet(themedStyles);
  const [filter, setFilter] = useState(0);
  const [taskItems, setTaskItems] = useState<ToDo[]>([]);

  const itemsLeftIni = () => {
    let amount = 0;
    taskItems.forEach((item, index) => {
      !item.completed ? amount++ : amount
    })
    return amount;
  }
  const [amount, setAmount] = useState(itemsLeftIni());

  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => setTheme(scheme.colorScheme));

  const onCompletedChange = (comp:boolean,index:number) => {
    const items = [...taskItems];
    const itemA = {...items[index]};
    itemA.completed = !itemA.completed;
    items[index] = itemA;
    setTaskItems(items);
    let amo = amount;
    itemA.completed ? amo-- : amo++;
    setAmount(amo);
  };

  const onClean = () => {
    let listItems = taskItems.filter(item => !item.completed);
    setTaskItems(listItems);
  } 

  const onFilterChange = (filter:number) =>{
    setFilter(filter);
  }

  const onToDoCreated = (newTask: ToDo) => {
    setTaskItems([...taskItems, newTask]);
    let amo = amount;
    newTask.completed ? amo : amo++;
    setAmount(amo);
  }

  let empty = true;


  return (
    <SafeAreaView style={theme == 'light' ? styles.container : styles.containerDark}>

      <View> 
        <ToDoListHeader theme={theme} amount={amount} onClean={() => onClean()} > </ToDoListHeader>

        <View style={theme == 'light' ? styles.taskStyles : styles.taskStylesDark}>
          <View>
          <ScrollView>
            {taskItems.map((item, index) => {
              {if ( (item.completed && filter == 2) || ( !item.completed && filter == 1 ) || (filter == 0) ) {
                empty = false;
                return(
                    <View>
                      <ToDoListItem theme={theme} key={item.id} todo={item} onCompletedChange={() => onCompletedChange(item.completed,index)} />
                    </View>
                )
                }   
              }
            })
            }
          </ScrollView>
          {empty &&
          (<View style={styles.Empty }>
            <Text style={theme == 'light' ? styles.TextE : styles.TextEDark}>No tasks available</Text>
          </View>)
          }
        </View>

        </View>
        </View>

      <View>
        <View style={theme == 'light' ? styles.rectangle : styles.rectangleDark}  ></View>
        <ToDoListFooter theme={theme} filter={filter} onFilterChange={onFilterChange} onToDoCreated={onToDoCreated}> </ToDoListFooter>
      </View>
    </SafeAreaView>
  );
};


