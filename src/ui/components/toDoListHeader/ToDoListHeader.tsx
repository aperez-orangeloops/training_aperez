import React from "react";
import {Text, View} from "react-native";
//import {ToDo} from "../../../core/models/ToDo";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import { TouchableOpacity } from "react-native-gesture-handler";
import {ButtonDelete} from "../../components/buttonDelete/ButtonDelete";
import {HeaderStyles} from "./ToDoListHeader.styles";

// onCompletedChange :(completed: boolean) => void
export const ToDoListHeader = (props:any) => {
  const styles = useDynamicStyleSheet(HeaderStyles);

  return (
    <View style={styles.containerHeader}>
      <View style={styles.containerTaskTitle}>
          <Text style={styles.textoT}>Tasks</Text>
      </View>
      <TouchableOpacity  onPress={() => {props.onClean()}}>
        <ButtonDelete></ButtonDelete>
      </TouchableOpacity>
      <Text style={styles.textoI} >{props.amount}  {props.amount == 0 ?  "item" : "items" } left </Text>
    </View>
  );
};


