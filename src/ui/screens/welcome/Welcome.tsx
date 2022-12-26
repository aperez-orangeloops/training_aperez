//import {observer} from "mobx-react";
import * as React from "react";
import {useState} from "react";
import {TouchableOpacity, View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
//import {TouchableOpacity} from "react-native-gesture-handler";
import {useSafeArea} from "react-native-safe-area-context";

import {ButtonDelete} from "../../components/buttonDelete/ButtonDelete";
import {ButtonFooter} from "../../components/buttonFooter/ButtonFooter";
//import {Button} from "../../components/button/Button";
import {Text} from "../../components/text/Text";
import {ToDoListHeader} from "../../components/toDoListHeader/ToDoListHeader";
import {ToDoListItem} from "../../components/toDoListItem/ToDoListItem";
//import {NavigationHelper} from "../../navigation/NavigationHelper";
import {NavigatorRoutes, Routes, StackScreenProps} from "../../navigation/Routes";
//import {UIHelper} from "../../utils/UIHelper";
import {themedStyles} from "./Welcome.styles";

export type WelcomeProps = StackScreenProps<NavigatorRoutes<NavigatorRoutes<Routes>["Screens"]>["Public"], "Welcome">;

export const Welcome = () => {
  const styles = useDynamicStyleSheet(themedStyles);
  const safeAreaInsets = useSafeArea();
  const [taskItems, setTaskItems] = useState([
    {
      title: "hola",
      completed: false,
      id: "hola1",
    },
    {
      title: "hola2",
      completed: false,
      id: "hola2",
    },
    {
      title: "hola3",
      completed: false,
      id: "hola3",
    },
  ]);

  const onCompletedChange = (index: number) => {
    const items = [...taskItems];
    const itemA = {...items[index]};
    itemA.completed = !itemA.completed;
    items[index] = itemA;
    setTaskItems(items);
  };

  return (
    <View style={[styles.container, {marginTop: safeAreaInsets.top}]}>
      <View style={styles.containerHeader}>
        <View style={styles.containerTaskTitle}>
          <Text style={styles.textoT}>Tasks</Text>
        </View>
        <ButtonDelete></ButtonDelete>
        <ToDoListHeader amount={taskItems.length}> </ToDoListHeader>
      </View>

      <View>
        {taskItems.map((item, index) => {
          return (
            <View>
              <View style={styles.containerTask}>
                <View style={styles.organize}>
                  <TouchableOpacity key={index} onPress={() => onCompletedChange(index)}>
                    <View style={item.completed ? styles.circleDone : styles.circle}></View>
                  </TouchableOpacity>

                  <ToDoListItem {...item} />
                </View>
              </View>

              <View style={styles.rectangle}></View>
            </View>
          );
        })}
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonscontainer}>
          <ButtonFooter text={"All"} />
          <ButtonFooter text={"All"} />
          <ButtonFooter text={"All"} />
        </View>
        <View>
          <Text> hola </Text>
        </View>
      </View>
    </View>
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
