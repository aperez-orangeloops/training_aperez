import React from "react";
import {Text, View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import { TouchableOpacity } from "react-native-gesture-handler";
import {ButtonDelete} from "../../components/buttonDelete/ButtonDelete";
import {HeaderStyles} from "./ToDoListHeader.styles";


export const ToDoListHeader = (props: any) => {
  const styles = useDynamicStyleSheet(HeaderStyles);

  return (
    <View style={props.theme == 'light' ? styles.containerHeader : styles.containerHeaderDark }>
      <View style={props.theme == 'light' ? styles.containerTaskTitle : styles.containerTaskTitleDark}>
          <Text style={props.theme == 'light' ? styles.textoT :  styles.textoTDark}>Tasks</Text>
      </View>
      <TouchableOpacity  onPress={() => {props.onClean()}}>
        <ButtonDelete></ButtonDelete>
      </TouchableOpacity>
      <Text style={props.theme == 'light' ? styles.textoI : styles.textoIDark} >{props.amount}  {props.amount == 0 ?  "item" : "items" } left </Text>
    </View>
  );
};


