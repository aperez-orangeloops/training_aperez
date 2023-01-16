import {en_US as baseCoreLocale} from "../../core/locales/en_US";
import {Locale as CoreLocale} from "../../core/locales/Locale";
import {CoreHelper} from "../../core/utils/CoreHelper";
import {Locale} from "./Locale";

const uiLocale: Omit<Locale, keyof CoreLocale> = {
  "Common-loadingText": "Loading...",
  "Home-title": "Home",
  "Input-hide": "hide",
  "Input-show": "show",
  "Sign-emailInputLabel": "Email",
  "Sign-passwordInputLabel": "Password",
  "SignIn-submitButtonLabel": "Log in",
  "SignIn-unsuccessfulSignInMessage": "Sign in unsuccessful",
  "SignUp-unsuccessfulSignUpMessage": "Email already has an account",
  "SignUp-title": "Sign up",
  "SignUp-nameInputLabel" : "Name",
  "SignUp-submitButtonLabel" : "Sign up",
  "Welcome-signIn": "Sign in instead",
  "Welcome-signInHeading": "Already have an account?",
  "Welcome-signUp": "Sign up",
  "Welcome-title": "Welcome!",
  "Welcome-welcomeMessage": "Welcome {userName}!",
  "ToDoScreen-NoTaskMessage" : "No tasks available",
  "ToDoListHeader-TaskTitle" : "Tasks",
  "ButtonDelete-DeleteTitle" : "Clean",
  "ToDoListHeader-ItemLeftMessage" : "left",
  "ToDoListFooter-AllButton": "All",
  "ToDoListFooter-ActiveButton" : "Active",
  "ToDoListFooter-CompletedButton" : "Completed",
  "ToDoListFooter-PlaceholderLabel" : "Write a task",

};

const coreLocale: Partial<CoreLocale> = {};

CoreHelper.mergeWith(baseCoreLocale, CoreHelper.mergeWith(coreLocale, uiLocale));
