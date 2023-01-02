import * as React from "react";
import {Text, View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import {buttonDeleteStyles} from "./ButtonDelete.styles";
import IconDelete from "../../assets/trash-outline 1.svg" 

export const ButtonDelete = () => {
  const styles = useDynamicStyleSheet(buttonDeleteStyles);
  return (
    <View style={styles.button}>
      <IconDelete/>
      <Text style={styles.text}>Clean</Text>
    </View>
  );
};
