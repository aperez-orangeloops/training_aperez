//import {observer} from "mobx-react";
import * as React from "react";
import {useState} from "react";
import {TouchableOpacity, View,ScrollView, Text} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
//import {TouchableOpacity} from "react-native-gesture-handler";
import {SafeAreaView, useSafeArea} from "react-native-safe-area-context";
import {ToDo} from "../../../core/models/ToDo";

//import {ButtonDelete} from "../../components/buttonDelete/ButtonDelete";

//import {Button} from "../../components/button/Button";
//import {Text} from "../../components/text/Text";
import {ToDoListHeader} from "../../components/toDoListHeader/ToDoListHeader";
import {ToDoListItem} from "../../components/toDoListItem/ToDoListItem";
import {ToDoListFooter} from "../../components/toDoListFooter/ToDoListFooter";
//import {NavigationHelper} from "../../navigation/NavigationHelper";
import {NavigatorRoutes, Routes, StackScreenProps} from "../../navigation/Routes";
//import {UIHelper} from "../../utils/UIHelper";
import {themedStyles} from "./Welcome.styles";


export type WelcomeProps = StackScreenProps<NavigatorRoutes<NavigatorRoutes<Routes>["Screens"]>["Public"], "Welcome">;

export const Welcome = () => {
  const styles = useDynamicStyleSheet(themedStyles);
  //const safeAreaInsets = useSafeArea();
  const [filter, setFilter] = useState(0);
  const [taskItems, setTaskItems] = useState([
    {
      title: "hola",
      completed: true,
      id: Math.random().toString(),
    },
    {
      title: "hola2",
      completed: false,
      id: Math.random().toString(),
    },
    {
      title: "hola3",
      completed: true,
      id: Math.random().toString(),
    },
  ]);

  const itemsLeftIni = () => {
    let amount = 0;
    taskItems.map((item, index) => {
      !item.completed ? amount++ : amount
    })
    return amount;
  }

  const [amount, setAmount] = useState(itemsLeftIni());

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
    <SafeAreaView style={styles.container}>

      <View> 
        <ToDoListHeader amount={amount} onClean={() => onClean()} > </ToDoListHeader>

        <View style={styles.taskStyles}>
          <View>
          <ScrollView>
            {taskItems.map((item, index) => {
              {if ( (item.completed && filter == 2) || ( !item.completed && filter == 1 ) || (filter == 0) ) {
                empty = false;
                return(
                    <View>
                      <ToDoListItem key={item.id} {...item} onCompletedChange={() => onCompletedChange(item.completed,index)} />
                    </View>
                )
                }   
              }
            })
            }
          </ScrollView>
          {empty &&
          (<View style={styles.Empty}>
            <Text style={styles.TextE}>No tasks available</Text>
          </View>)
          }
        </View>

        </View>
        </View>

      <View>
        <View style={styles.rectangle}></View>
        <ToDoListFooter filter={filter} onFilterChange={onFilterChange} onToDoCreated={onToDoCreated}> </ToDoListFooter>
      </View>
    </SafeAreaView>
  );
};

{
  /*  

const handleSignUp = React.useCallback(() => {
    NavigationHelper.navigateTo({
      screen: "Public",
      params: {screen: "SignUp"},
    });
  }, []);

  const handleSignIn = React.useCallback(() => {
    NavigationHelper.navigateTo({
      screen: "Public",
      params: {screen: "SignIn"},
    });
  }, []);  */
}

{
  /* <View style={styles.container}>
<Text style={[styles.title as TextStyle, {marginTop: safeAreaInsets.top}]}>{UIHelper.formatMessage("Welcome-title")}</Text>

 <Button containerStyle={styles.signUpButton} onPress={handleSignUp}>
  {UIHelper.formatMessage("Welcome-signUp")}
</Button>

<Text style={styles.signInHeading}>{UIHelper.formatMessage("Welcome-signInHeading")}</Text>


<TouchableOpacity onPress={handleSignIn} containerStyle={[styles.signInButton, {marginBottom: safeAreaInsets.bottom + 20}]}>
  <Text style={styles.signInText as TextStyle}>{UIHelper.formatMessage("Welcome-signIn")}</Text>
</TouchableOpacity>

</View>
*/
}
