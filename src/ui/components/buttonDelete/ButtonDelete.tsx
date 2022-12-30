import * as React from "react";
import {Text, View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import {buttonDeleteStyles} from "./ButtonDelete.styles";
//import AntDesign from 'react-native-vector-icons/AntDesign'

export const ButtonDelete = () => {
  const styles = useDynamicStyleSheet(buttonDeleteStyles);
  return (
    <View style={styles.button}>
      {/* <AntDesign name="DeleteOutlined" style={{color:'red'}}> </AntDesign> */}
      <Text style={styles.text}>Clean</Text>
    </View>
  );
};
