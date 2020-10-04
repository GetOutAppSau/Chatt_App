import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from './RooterNavigation';
import LoginPage from './Components/LoginPage';

import Register from './Components/Register';
import HomeChat from './Components/HomeChat';
import MessagePage from './Components/MessagePage';


const Stack = createStackNavigator();





const RooterComponent = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeChat" component={HomeChat} />
        <Stack.Screen name="Message" component={MessagePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RooterComponent;
//<Stack.Screen name="HomeChat" component={HomeChat} />