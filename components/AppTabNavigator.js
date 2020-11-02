import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import {Icon}from 'react-native-elements'
import ProfileScreen from '../screens/ProfileScreen'
import Add from '../screens/Add'

export const AppTabNavigator = createBottomTabNavigator({
  Home : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon :<Icon name='home' type='font-awesome' color='#ffffff' size ={22}/>, 
      tabBarLabel : "home",
    } ,
  Profile: {
    screen:ProfileScreen,
    tabBarIcon :<Icon name='user-circle' type='font-awesome' color='#ffffff' size ={22}/>, 
      tabBarLabel : "Profile",
     },
  Share:{screen:Add,
    tabBarIcon :<Icon name='plus-square' type='font-awesome' color='#ffffff' size ={22}/>, 
    tabBarLabel : "Share",
  }

  },
 
});