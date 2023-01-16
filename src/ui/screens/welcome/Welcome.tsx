import * as React from "react";

import {DrawerNavigation} from "../../navigation/DrawerNavigation";
import {NavigatorRoutes, Routes, StackScreenProps} from "../../navigation/Routes";
export type WelcomeProps = StackScreenProps<NavigatorRoutes<NavigatorRoutes<Routes>["Screens"]>["Public"], "Welcome">;


export const Welcome = () => {

  return (
    <DrawerNavigation/>     
  );
};