import * as React from "react";
import {Text, View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import {TouchableOpacity } from "react-native-gesture-handler";

import {UIHelper} from "../../utils/UIHelper";

import {buttonFooterStyles} from "./ButtonFooter.styles";


export const ButtonFooter = (props : any) => {
  const styles = useDynamicStyleSheet(buttonFooterStyles);
  const {theme, filter , name, type , onFilterChange} = props;

  return (
    <TouchableOpacity onPress={() => {onFilterChange(type)}}>
      <View style={ theme == 'light' ? (filter ==  type ? styles.buttonN : styles.button)
            : (filter ==  type ? styles.buttonN : styles.buttonDark) }>

        <Text style={theme == 'light' ?  (filter == type ? styles.textN : styles.text) : 
              styles.textN}>{UIHelper.formatMessage(name)}</Text>
      </View> 
    </TouchableOpacity>        
  );
};
