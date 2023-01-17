import {observer} from "mobx-react";
import React from "react";
import {View} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import {useFocusEffect} from "@react-navigation/native";
import {useHeaderHeight} from "@react-navigation/stack";
import {preload} from "react-native-bundle-splitter";
import {useSafeArea} from "react-native-safe-area-context";
//import {NavigationHelper} from "../../navigation/NavigationHelper";

import {useFormInput} from "../../hooks/useFormInput";
import {NavigatorRoutes, Routes, StackScreenProps} from "../../navigation/Routes";
import {UIHelper} from "../../utils/UIHelper";
import {DataStore} from "../../../core/stores/DataStore";

import {Button} from "../../components/button/Button";
import {Input} from "../../components/input/Input";
import {KeyboardAwareScrollView} from "../../components/keyboardawarescrollview/KeyboardAwareScrollView";
import { HamburgerButton } from "../../components/hamburgerButton/HamburgerButton";


import {themedStyles} from "./SignUp.styles";
import MainLogo from "../../assets/companyLogo.svg";

export type SignUpProps = StackScreenProps<NavigatorRoutes<NavigatorRoutes<Routes>["Screens"]>["Public"], "SignUp">;

export const SignUp: React.FC< SignUpProps> = observer((props: any) => {
  const dataStore = DataStore.getInstance();
  const {authenticationState} = dataStore;
  const styles = useDynamicStyleSheet(themedStyles);

  const safeAreaInsets = useSafeArea();

  const emailFormInput = useFormInput();
  const passwordFormInput = useFormInput();
  const nameFormInput = useFormInput();

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => preload().component("Home"), 500);
    }, [])
  );

  const handleSignUp = React.useCallback(async () => {

    if (authenticationState.loadingSignUp) return;

    const signUpResponse = await dataStore.signUp({
      name: nameFormInput.inputProps.value,
      email: emailFormInput.inputProps.value,
      password: passwordFormInput.inputProps.value,
    });

    if (signUpResponse.success){
      props.navigation.navigate("Home", {params: nameFormInput.inputProps.value })
    }

    //if (signUpResponse.success) NavigationHelper.navigateTo({screen: "Main", params: ({screen: "Home" , params: props.navigation} ) });
    else alert(UIHelper.formatMessage("SignUp-unsuccessfulSignUpMessage"));
  }, [emailFormInput.inputProps.value, nameFormInput.inputProps.value, passwordFormInput.inputProps.value]);

  const headerHeight = useHeaderHeight();

  return (
    <View style={styles.wrapper}>
      <View style={{marginLeft: 10}}>
        <HamburgerButton navigation={props.navigation}/> 
      </View>

      <View style={styles.backLogoContainer}>
        <MainLogo style={styles.backLogo} />
      </View>

      <KeyboardAwareScrollView scrollEnabled={true} contentContainerStyle={[styles.scrollViewContentContainer, {marginLeft: safeAreaInsets.left, marginRight: safeAreaInsets.right}]} keyboardShouldPersistTaps="handled">
        <MainLogo style={[styles.mainLogo, {marginTop: safeAreaInsets.top + headerHeight}]} />

        <View style={styles.inputContainer}>
          <Input {...emailFormInput.inputProps} style={styles.input} label={UIHelper.formatMessage("Sign-emailInputLabel")} placeholderTextColor="lightgray" />
          <Input {...passwordFormInput.inputProps} style={styles.input} label={UIHelper.formatMessage("Sign-passwordInputLabel")} secureTextEntry={true} placeholderTextColor="lightgray" />
          <Input {...nameFormInput.inputProps} style={styles.input} label={UIHelper.formatMessage("SignUp-nameInputLabel")} placeholderTextColor="lightgray" />
        </View>

        <View style={styles.buttonWrapper}>
          <Button containerStyle={styles.buttonContainer} isLoading={authenticationState.loadingSignUp} onPress={handleSignUp}>
            {UIHelper.formatMessage("SignUp-submitButtonLabel")}
          </Button>
        </View>

        <View style={{paddingBottom: safeAreaInsets.bottom}} />
      </KeyboardAwareScrollView>
    </View>
  );
});
