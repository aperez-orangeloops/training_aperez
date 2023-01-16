import {DynamicStyleSheet, DynamicValue} from "react-native-dark-mode";

import {variables} from "../../style/variables";

export const themedStyles = new DynamicStyleSheet({
  hamburgerContainer: {
    padding: 10,
  },
  hamburgerIcon: {
    color: new DynamicValue(variables.blackColor, variables.lightGreyColor),
    width: 20,
    height: 20,
  },
});