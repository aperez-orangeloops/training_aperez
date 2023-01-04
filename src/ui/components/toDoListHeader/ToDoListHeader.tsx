import React from "react";
import {Text, View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import { TouchableOpacity } from "react-native-gesture-handler";

import {UIHelper} from "../../utils/UIHelper";

import {HeaderStyles} from "./ToDoListHeader.styles";

import {ButtonDelete} from "../../components/buttonDelete/ButtonDelete";



export const ToDoListHeader = (props: any) => {
  const styles = useDynamicStyleSheet(HeaderStyles);
  const {theme, amount, onClean} = props;

  return (
    <View style={theme == 'light' ? styles.containerHeader : styles.containerHeaderDark }>
      <View style={theme == 'light' ? styles.containerTaskTitle : styles.containerTaskTitleDark}>
          <Text style={theme == 'light' ? styles.textoT :  styles.textoTDark}>{UIHelper.formatMessage("Welcome-TaskTitle")}</Text>
      </View>
      <TouchableOpacity  onPress={() => {onClean()}}>
        <ButtonDelete></ButtonDelete>
      </TouchableOpacity>
      <Text style={theme == 'light' ? styles.textoI : styles.textoIDark} >{amount}  {amount == 1 ?  "item" : "items" } {UIHelper.formatMessage("Welcome-ItemLeftMessage")} </Text>
    </View>
  );
};


