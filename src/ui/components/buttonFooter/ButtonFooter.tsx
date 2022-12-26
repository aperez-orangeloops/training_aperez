import * as React from "react";
import {Text, View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";

import {buttonFooterStyles} from "./ButtonFooter.styles";

export const ButtonFooter = (props: {text: string}) => {
  const styles = useDynamicStyleSheet(buttonFooterStyles);
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};
