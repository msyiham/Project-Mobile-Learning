import React, { useState } from 'react';
import * as Progress from 'react-native-progress';
import {
    SafeAreaView,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

  const Quiz = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quiz</Text>
        <NumberButtons/>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f1d67b',
    },
    title: {
      fontSize: 20,
      marginBottom: 10,
      textAlign: 'center',
      color: '#154198',
      fontWeight: 'bold',
    },
  });
  const NumberButtons = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  
    const rows = [];
    let row = [];
    numbers.forEach((number, index) => {
      row.push(
        <TouchableOpacity key={number}>
          <View
            style={{
              backgroundColor: '#1f92d4',
              padding: 16,
              borderRadius: 8,
              margin: 8,
              width: 80,
              height: 80,
            }}>
            <Text
            style={{
              fontSize: 25,
              textAlign: 'center'
            }}>{number}</Text>
          </View>
        </TouchableOpacity>
      );
      if ((index + 1) % 3 === 0) {
        rows.push(<View key={index} style={{ flexDirection: 'row' }}>{row}</View>);
        row = [];
      }
    });
  
    if (row.length > 0) {
      rows.push(<View key={numbers.length} style={{ flexDirection: 'row' }}>{row}</View>);
    }
  
    return <View>{rows}</View>;
  };
  
  
  export default Quiz;