import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Posts from './src/Components/Posts/Posts';
import ToDoListData from './src/Components/ToDoList/ToDoListData';
import Home from './src/Components/Home/Home';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(()=>{
    function longestUniqueSubstring(s) {
      let maxLength = 0;
      let start = 0;
      let charIndexMap = {};
  
      for (let i = 0; i < s.length-1; i++) {
          const currentChar = s[i];
          if (charIndexMap[currentChar] >= start) {
              start = charIndexMap[currentChar] + 1;
          }
          charIndexMap[currentChar] = i;
          maxLength = Math.max(maxLength, i - start + 1);
      }
      return s.substring(start, start + maxLength);
  }
  
  console.log(longestUniqueSubstring("pwwkew")); // Output: "wke"
  })

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
