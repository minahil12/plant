import { StyleSheet, Text, View,Platform ,StatusBar} from 'react-native';
import {createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import React from 'react'

import HomeScreen from './HomeScreen';
import signUp from './signUp'
import AboutScreen from './AboutScreen'
import main from './main'
import Indoor from './Indoor'
import Seeds from './seeds'
import Outdoor from './outdoor'
import Fertilizer from './Fertilizer'
import flowers from './Flower'
import Fruits from './Fruits'
import Vegetable from './Vegetable'
import infoCard from './infoCard'
import Info from './Info'

import info1 from './info1'
import info2 from './info2'
import info3 from './info3'
import info4 from './info4'
import info5 from './info5'


export default class App extends React.Component {

  render() {
    return (
      

    <AppContainer/>

    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  signUp:{
    screen: signUp
  },
  main: {
    screen :main
  },
  seeds:{
    screen: Seeds
  },
  indoor:
  {
     screen: Indoor
  },
  flowers:
  {
     screen:flowers
  },
  outdoor:{
    screen: Outdoor
  },
  fer:{
    screen: Fertilizer
  },
  fruits:
  {
    screen:Fruits
  },
  vegetable:
  {
    screen:Vegetable
  },
  infoCard:
  {
    screen:infoCard
  },
  Info:
  {
    screen:Info
  },
  info1:
  {
    screen:info1
  },
  info2:
  {
    screen:info2
  },
  info3:
  {
    screen:info3
  },
  info4:
  {
    screen:info4
  },
  info5:
  {
    screen:info5
  }
}
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  height:Platform.OS===' ios'?200:100,
  container: {
    flex:1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

