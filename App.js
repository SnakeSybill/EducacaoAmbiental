/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/components/home/home.js'
import Quiz from './src/components/quiz/quiz.js';

const StackNavigator = createStackNavigator({
  Home: Home,
  Quiz: Quiz,
   
    headerMode: 'screen' 
  
});

const App = createAppContainer(StackNavigator);
export default App;
