import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SignIn,
  CreateAccount,
  Search,
  Home,
  Details,
  Search2,
  Profile,
  Splash
} from "./Screen";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Details" component={Details} option={({route})=> ({title: route.params.name})} />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search}/>
    <SearchStack.Screen name="Search2" component={Search}/>
  </SearchStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
)

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen}/>
    <Tabs.Screen name="Search" component={SearchStackScreen}/>
</Tabs.Navigator>
);

const Drawer = createDrawerNavigator();

export default () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabsScreen}/>
      <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
    </Drawer.Navigator>
    {/* <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} options={{title: 'Sign In'}} />
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{title: 'Create Account'}} />
    </AuthStack.Navigator> */}
  </NavigationContainer>
);