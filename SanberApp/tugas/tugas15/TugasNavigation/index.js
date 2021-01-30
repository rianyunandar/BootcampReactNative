import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import AboutScreen from './AboutScreen';
import AddScreen from './AddScreen';
import OtherScreen from './OtherScreen';
import ProjectScreen from './ProjectScreen';
import SkillScreen from './SkillScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name ="LoginScreen" component ={LoginScreen}/>
                <Stack.Screen name ="Drawwer" component ={Drawwer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
 const Drawwer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="MainApp" component={MainApp}/>
            <Drawer.Screen name="AboutScreen" component={AboutScreen}/>
            <Drawer.Screen name="OtherScreen" component={OtherScreen}/>
        </Drawer.Navigator>
    )
}
 const MainApp = () => {
     return(
         <Tab.Navigator>
             <Tab.Screen name="skillScreen" component={SkillScreen} />
             <Tab.Screen name="ProjectScreen" component={ProjectScreen} />
             <Tab.Screen name="AddScreen" component={AddScreen} />
         </Tab.Navigator>
     )
}

export default navigation;


 