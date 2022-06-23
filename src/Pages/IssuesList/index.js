import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ width: '97%', margin: 3 }}
      onPress={() => navigation.navigate('Web', { url: props.data.html_url })}
    >
      <View style={styles.card}>
        <Text
          style={{
            fontSize: responsiveFontSize(1.6),
            paddingLeft: 5,
            paddingTop: 8,
            color: '#3a3b3c',
          }}
        >
          {props.data.number}
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#000',
            fontSize: responsiveFontSize(1.6),
            paddingLeft: 10,
            paddingTop: 8,
            width: responsiveWidth(50),
          }}
        >
          {props.data.title}
        </Text>
        <Text
          style={{
            fontStyle: 'italic',
            color: '#000',
            fontSize: responsiveFontSize(1.4),
            paddingLeft: 20,
            paddingTop: 8,
            width: '50%',
          }}
        >
          {props.data.state}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
    height: responsiveHeight(10),
    width: '100%',
    alignContent: 'space-around',
    flexDirection: 'row',
  },
});
