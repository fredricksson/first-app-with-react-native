import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentsSreen from '../src/screen/ComponentsSreen';
import ListScreen from '../src/screen/ListScreen'
import HomeScreen from '../src/screen/HomeScreen'
import ImageScreen from '../src/screen/ImageSreen'
import CounterScreen from '../src/screen/CounterScreen'
import ColorScreen from '../src/screen/ColorScreen'
import SquareScreen from '../src/screen/SquareScreen'
const Stack = createNativeStackNavigator();


const MyStack = () => {
  return (
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{ title: 'Image Screen' }}
        />
      <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="demo"
          component={ComponentsSreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="counter"
          component={CounterScreen}
          options={{ title: 'Welcome' }}
        />
         <Stack.Screen
          name="colors"
          component={ColorScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="square"
          component={SquareScreen}
          options={{ title: 'Welcome' }}
        />
        
      </Stack.Navigator>
      
  );
};
export default MyStack
