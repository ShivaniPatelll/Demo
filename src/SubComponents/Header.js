import {useNavigation} from '@react-navigation/native';
import {useNativeBase} from 'native-base';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Appearance,
  Image,
  project_id,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Header({title, navigation}) {
  const colorScheme = Appearance.getColorScheme();
  const navigaiton = useNavigation();
  console.log('colorScheme', colorScheme);
  if (title === 'Posts' || title === 'ToDoList') {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#fff',
            borderWidth: 0.1,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign
            name="left"
            size={16}
            color={colorScheme == 'dark' ? '#000' : '#000'}
            style={{padding: '1%', alignSelf: 'center'}}
          />
        </TouchableOpacity>

        <Text
          style={{
            marginLeft: '5%',
            fontSize: 18,
            fontWeight: '700',
            color: '#000',
            alignSelf: 'center',
          }}>
          {title}
        </Text>
      </View>
    );
  } else {
    <View style={styles.container}>
      <Text
        style={{
          marginLeft: '5%',
          fontSize: 18,
          fontWeight: '700',
          color: '#000',
          alignSelf: 'center',
        }}>
        {title}
      </Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.18,
    paddingVertical: '4%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
});
