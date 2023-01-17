import * as React from "react";

import {Text, View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import {observer} from "mobx-react-lite";

import data from '../../../ui/data'
import {UIHelper} from "../../utils/UIHelper";

import { HamburgerButton } from "../../components/hamburgerButton/HamburgerButton";
import { HamburgerButtonProps } from "../../components/hamburgerButton/HamburgerButton";
import { Carousels } from "../../components/carousels/Carousels";
import {themedStyles} from "./HamburgerScreen.styles";



export const HamburgerScreen: React.FC<HamburgerButtonProps>  = observer((props) =>  {
  const styles = useDynamicStyleSheet(themedStyles);
  
  return (
    <View style={styles.container}>

      <View style={{marginRight:340}}>
        <HamburgerButton navigation={props.navigation}/> 
      </View>


      <View style={styles.homeContainer}>

        <View style={{paddingBottom:100}}>
          <Text style={styles.text}> {UIHelper.formatMessage("Home-title")} </Text>
        </View>

        <Carousels items={data} />

      </View>
  </View> 
  );
});
