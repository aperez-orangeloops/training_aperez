import * as React from "react";
import {DrawerNavigationProp} from "@react-navigation/drawer/src/types";
import {observer} from "mobx-react-lite";
import {View,ScrollView, Text, SafeAreaView} from "react-native";

import {useDynamicStyleSheet} from "react-native-dark-mode";
import {TouchableOpacity} from "react-native-gesture-handler";

import Hamburger from "../../assets/hamburger.svg";
import {themedStyles} from "./HamburgerButton.styles";

export type HamburgerButtonProps = {
  navigation: DrawerNavigationProp<any>;
};

export const HamburgerButton: React.FC<HamburgerButtonProps> = observer((props) => {
  const styles = useDynamicStyleSheet(themedStyles);

  return (
    <SafeAreaView> 
    <TouchableOpacity style={styles.hamburgerContainer} onPress={props.navigation.openDrawer}>
      <Hamburger style={styles.hamburgerIcon} />
    </TouchableOpacity>
    </SafeAreaView>
  );
});