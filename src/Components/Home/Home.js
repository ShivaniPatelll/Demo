import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate('ToDoListData')}>
          <Text style={styles.buttonTxt}>To-Do List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate('Posts')}>
          <Text style={styles.buttonTxt}>Posts List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: 'space-evenly',
  },
  buttonView: {
    height: 30,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#03AED2',
    justifyContent: 'center',
  },
  buttonTxt: {
    fontSize: 13,
    color: '#000',
    alignSelf: 'center',
  },
});
