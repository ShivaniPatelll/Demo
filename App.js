import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Posts from './src/Components/Posts/Posts';
import ToDoListData from './src/Components/ToDoList/ToDoListData';
import Home from './src/Components/Home/Home';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="ToDoListData" component={ToDoListData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
