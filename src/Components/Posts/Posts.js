import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Posts() {
  const [responsedata, setResponseData] = useState(null);
  const [loading, setloading] = useState(true);

  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(response => {
        // Handle successful response
        console.log('response.data', response.data);
        setResponseData(response.data);
        setloading(false);
      })
      .catch(error => {
        // Handle error
        setloading(false);
        console.log('error', error);
      });
  }, []);

  const renderData = item => {
    console.log('item', item);
    return (
      <View style={styles.FlatListView}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>Title: </Text>
          <Text style={styles.FlatListTxt}>{item.item.title}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>Description: </Text>
          <Text style={[styles.FlatListTxt, {width: '75%'}]}>
            {item.item.body}
          </Text>
        </View>
      </View>
    );
  };

  const renderEmpty = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'grey', fontWeight: '500', fontSize: 15}}>
          No Data Found
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {loading == true ? (
        <View style={[styles.container, {justifyContent: 'center'}]}>
          <ActivityIndicator
            color={'black'}
            size="large"
            style={{alignSelf: 'center'}}
          />
        </View>
      ) : (
        <View style={{marginVertical: 5}}>
          <FlatList
            data={responsedata}
            renderItem={renderData}
            ListEmptyComponent={renderEmpty}
          />
        </View>
      )}
      <Text>Posts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  FlatListView: {
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#EEEEEE',
    padding: 5,
    borderRadius: 3,
  },
  FlatListTxt: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
    width: '88%',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
});
