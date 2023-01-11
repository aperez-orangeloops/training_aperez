import * as React from "react";

import {Text, View} from "react-native";
import { HamburgerButton } from "../../components/hamburgerButton/HamburgerButton";
import { HamburgerButtonProps } from "../../components/hamburgerButton/HamburgerButton";
import {observer} from "mobx-react-lite";

export const HamburgerScreen: React.FC<HamburgerButtonProps>  = observer((props) =>  {
  return (
    <View>
      <HamburgerButton navigation={props.navigation}/> 
    <View style={{justifyContent: "center", alignItems: "center", paddingVertical: 300}}>
        <Text style={{fontSize: 20}}> Home </Text>
    </View>
  </View>
  );
});
