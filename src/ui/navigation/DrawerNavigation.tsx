import React from "react";

import {createDrawerNavigator, DrawerContentScrollView,DrawerItemList,DrawerItem} from "@react-navigation/drawer"
import { ToDoScreen } from "../screens/toDo/toDoScreen";
import { HamburgerScreen } from "../screens/hamburgerScreen/HamburgerScreen";
import { HamburgerButton } from "../components/hamburgerButton/HamburgerButton";



const Drawer = createDrawerNavigator();


export function DrawerNavigation() {
    return (
        <Drawer.Navigator>  
            <Drawer.Screen name = "Hamburger Home" component={HamburgerScreen}/>
            <Drawer.Screen  name = "ToDoScreen" component={ToDoScreen}/> 
        </Drawer.Navigator>
    )
}