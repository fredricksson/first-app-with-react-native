import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentsSreen from './src/screen/ComponentsSreen';
import ListScreen from './src/screen/ListScreen'
const Stack = createNativeStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Home"
          component={ComponentsSreen}
          options={{ title: 'Welcome' }}
        />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};
export default MyStack