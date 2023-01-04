import {LocaleParams as CoreLocaleParams} from "../../core/locales/Locale";

export type LocaleParams = CoreLocaleParams & {
  "Common-loadingText": {};
  "Home-title": {};
  "Input-hide": {};
  "Input-show": {};
  "SignIn-emailInputLabel": {};
  "SignIn-passwordInputLabel": {};
  "SignIn-submitButtonLabel": {};
  "SignIn-unsuccessfulSignInMessage": {};
  "SignUp-title": {};
  "Welcome-signIn": {};
  "Welcome-signInHeading": {};
  "Welcome-signUp": {};
  "Welcome-title": {};
  "Welcome-welcomeMessage": {};
  "Welcome-NoTaskMessage": {};
  "Welcome-TaskTitle" : {};
  "Welcome-DeleteTitle" : {};
  "Welcome-ItemLeftMessage" : {};
  "Welcome-AllButton" : {};
  "Welcome-ActiveButton" : {};
  "Welcome-CompletedButton" : {};
  "Welcome-PlaceholderLabel": {};
};

export type LocaleKey = keyof LocaleParams;

export type Locale = Record<LocaleKey, string> & {
  code: string;
};
