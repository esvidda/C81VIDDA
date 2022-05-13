import React, { Component } from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabNavigator from "./tabnavigator";
import Profile from "../sreens/profile"

const Drawer = createDrawerNavigator();
const DrawerNavigator = ()=>{
    return(
        <DrawerNavigator>
            <Drawer.Screen name ="inicio" component = {TabNavigator}/>
            <Drawer.Screen name ="perfil" component = {Profile}/>
        </DrawerNavigator>
    )
}
export default  DrawerNavigator