import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer"

import { ToDoScreen } from "../screens/toDo/toDoScreen";
import { HamburgerScreen } from "../screens/hamburgerScreen/HamburgerScreen";
import { SignUp } from "../../ui/screens/signup/SignUp";
import { Home } from "../../ui/screens/home/Home";


const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
    return (
        <Drawer.Navigator>  
            <Drawer.Screen name = "Hamburger Home" component={HamburgerScreen}/>
            <Drawer.Screen name = "ToDoScreen" component={ToDoScreen}/> 
            <Drawer.Screen name = "SignUp" component={SignUp}/> 
            <Drawer.Screen name = "Home" component={Home}/> 
        </Drawer.Navigator>
    )
}