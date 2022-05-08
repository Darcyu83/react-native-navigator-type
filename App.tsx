import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { Alert, Text } from 'react-native';
import styled from 'styled-components/native';
import Explore from './src/screens/Explore';
import Profile from './src/screens/Profile';
import Restaurants from './src/screens/Restaurants';
import Restaurant from './src/screens/Restaurant';

export type RootStackParamList = {
  Explore: undefined;
  Restaurants: undefined;
  Restaurant: { name: string };
  Profile: { userId: string } | undefined;
};

export type ScreenProps = NativeStackScreenProps<RootStackParamList>;

// navigation  & router props 가져오기
// NativeStackScreenProps for @react-navigation/native-stack

// navigation props 가져오기
// NativeStackNavigationProp from @react-navigation/native-stack
// StackNavigationProp from @react-navigation/stack
// DrawerNavigationProp from @react-navigation/drawer
// BottomTabNavigationProp from @react-navigation/bottom-tabs

// route props 가져오기
// RouteProp from @react-navigation/native

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Explore">
        <RootStack.Screen name="Explore" component={Explore} />
        <RootStack.Screen name="Restaurants" component={Restaurants} />
        <RootStack.Screen name="Restaurant" component={Restaurant} />
        <RootStack.Screen name="Profile" component={Profile} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
