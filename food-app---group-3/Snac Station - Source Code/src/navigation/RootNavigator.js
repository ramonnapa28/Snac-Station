import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Home from '../components/Home';
import Details from '../components/Details';
import LoadingScreen from '../components/LoadingScreen'

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
     <NavigationContainer>
      <Stack.Navigator intialRouteName="Home"
      screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='loading' component={LoadingScreen}/>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default RootNavigator;

