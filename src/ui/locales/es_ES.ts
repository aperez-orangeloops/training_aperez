import {es_ES as baseCoreLocale} from "../../core/locales/es_ES";
import {Locale as CoreLocale} from "../../core/locales/Locale";
import {CoreHelper} from "../../core/utils/CoreHelper";
import {Locale} from "./Locale";

const uiLocale: Omit<Locale, keyof CoreLocale> = {
  "Common-loadingText": "Cargando...",
  "Home-title": "Inicio",
  "Input-hide": "ocultar",
  "Input-show": "mostrar",
  "SignIn-submitButtonLabel": "Iniciar sesión",
  "SignIn-unsuccessfulSignInMessage": "Inicio de sesión fallido",
  "SignUp-title": "Registrarse",
  "SignUp-nameInputLabel" : "Nombre",
  "SignUp-unsuccessfulSignUpMessage": "Email ya registrado",
  "SignUp-submitButtonLabel" : "Registrarse",
  "Sign-emailInputLabel": "Email",
  "Sign-passwordInputLabel": "Contraseña",
  "Welcome-signIn": "Iniciar sesión",
  "Welcome-signInHeading": "Ya tenés una cuenta?",
  "Welcome-signUp": "Registrarse",
  "Welcome-title": "Bienvenido!",
  "Welcome-welcomeMessage": "Bienvenido {userName}!",
  "ToDoScreen-NoTaskMessage" : "No hay tareas disponibles",
  "ToDoListHeader-TaskTitle" : "Tareas",
  "ButtonDelete-DeleteTitle" : "Limpiar",
  "ToDoListHeader-ItemLeftMessage" : "sin hacer",
  "ToDoListFooter-AllButton" : "Todas",
  "ToDoListFooter-ActiveButton" : "Activas",
  "ToDoListFooter-CompletedButton" : "Completadas",
  "ToDoListFooter-PlaceholderLabel" : "Ingrese una tarea",
};

const coreLocale: Partial<CoreLocale> = {};

CoreHelper.mergeWith(baseCoreLocale, CoreHelper.mergeWith(coreLocale, uiLocale));
