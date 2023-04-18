import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
const NumberButtons = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    const [displayValue, setDisplayValue] = useState('');
  
    const handleButtonPress = (number) => {
      setDisplayValue(displayValue + number.toString());
    };
  
    const handleDeletePress = () => {
      setDisplayValue(displayValue.slice(0, -1));
    };
  
    const rows = [];
    let row = [];
    numbers.forEach((number, index) => {
      row.push(
        <TouchableOpacity key={number} onPress={() => handleButtonPress(number)}>
          <View
            style={{
              backgroundColor: '#1f92d4',
              padding: 16,
              borderRadius: 8,
              margin: 8,
              height: 80,
              width: 80,
            }}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
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
      rows.push(<View key={numbers.length} style={{flexDirection: 'row'}}>{row}</View>);
    }
  
    return (
      <View
        style={{
          backgroundColor: '#ffff',
          borderRadius: 8,
          margin: 8,
          height: 50,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#154198',
            textAlign: 'center',
            marginBottom: 20,
          }}>{displayValue}</Text>
        {rows}
        <TouchableOpacity onPress={handleDeletePress}>
          <View
            style={{
              backgroundColor: '#FF3B30',
              padding: 16,
              borderRadius: 8,
              margin: 8,
              height: 80,
              width: '200'
            }}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',  
              }}>DELETE</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  export default NumberButtons;