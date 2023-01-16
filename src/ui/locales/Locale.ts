import {LocaleParams as CoreLocaleParams} from "../../core/locales/Locale";

export type LocaleParams = CoreLocaleParams & {
  "Common-loadingText": {};
  "Home-title": {};
  "Input-hide": {};
  "Input-show": {};
  "SignIn-submitButtonLabel": {};
  "SignIn-unsuccessfulSignInMessage": {};
  "SignUp-title": {};
  "Sign-emailInputLabel": {};
  "Sign-passwordInputLabel": {};
  "SignUp-submitButtonLabel": {};
  "SignUp-unsuccessfulSignUpMessage": {};
  "SignUp-nameInputLabel" : {};
  "Welcome-signIn": {};
  "Welcome-signInHeading": {};
  "Welcome-signUp": {};
  "Welcome-title": {};
  "Welcome-welcomeMessage": {};
  "ToDoScreen-NoTaskMessage": {};
  "ToDoListHeader-TaskTitle" : {};
  "ButtonDelete-DeleteTitle" : {};
  "ToDoListHeader-ItemLeftMessage" : {};
  "ToDoListFooter-AllButton" : {};
  "ToDoListFooter-ActiveButton" : {};
  "ToDoListFooter-CompletedButton" : {};
  "ToDoListFooter-PlaceholderLabel": {};
};

export type LocaleKey = keyof LocaleParams;

export type Locale = Record<LocaleKey, string> & {
  code: string;
};
