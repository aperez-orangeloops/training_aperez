import {observer} from "mobx-react";
import * as React from "react";
import {ActivityIndicator, Alert, View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";

import {DataStore} from "../../../core/stores/DataStore";
import {UIHelper} from "../../utils/UIHelper";
import {Text} from "../../components/text/Text";
import { HamburgerButton } from "../../components/hamburgerButton/HamburgerButton";

import {themedStyles} from "./Home.styles";


export const Home: React.FC = observer((props:any) => {
  const dataStore = DataStore.getInstance();
  const styles = useDynamicStyleSheet(themedStyles);

  const [userName, setUserName] = React.useState("");

  const fetchUser = React.useCallback(() => {
    dataStore
      .fetchUser({
        accessToken: dataStore.authenticationState.accessToken!,
      })
      .then((r) => {
        if (r.success) setUserName(r.user.name);
        else {
          Alert.alert(UIHelper.formatMessage("Common-error"), "", [
            {
              text: UIHelper.formatMessage("Common-retry"),
              onPress: fetchUser,
            },
            {
              text: UIHelper.formatMessage("Common-ok"),
              onPress: () => {
                //
              },
            },
          ]);
        }
      });
  }, []);

  React.useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.container} >
        <View style={{marginRight: 320}}>
         <HamburgerButton navigation={props.navigation}/> 
        </View>

      <View style={styles.container}>

        {dataStore.authenticationState.loadingUser ? <ActivityIndicator /> : <Text>{UIHelper.formatMessage("Welcome-welcomeMessage", {userName})}</Text>}
        
        <Text>{UIHelper.formatMessage("Home-title")}</Text>
      </View>

    </View>

  );
});