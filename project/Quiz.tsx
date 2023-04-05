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
    _View,
  } from 'react-native';

  const Quiz = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quiz</Text>
        <Gambar/>
        <NumberButtons/>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1d67b',
    },
    title: {
      fontSize: 20,
      marginBottom: 10,
      color: '#154198',
      fontWeight: 'bold',
    },
    tombolAngka:{
      backgroundColor: '#1f92d4',
      padding: 16,
      borderRadius: 8,
      margin: 10,
      height: 90,
      width: 110,
    },
    angka:{
        fontSize: 25,
        textAlign: 'center',
    },
    kotakHasil:{
      backgroundColor: '#ffff',
      borderRadius: 8,
      margin: 8,
      height: 50,
    },
    hasil:{
      fontSize: 25,
      color: '#154198',
      textAlign: 'center',
      marginBottom: 20,
    },
    TombolHapus:{
      backgroundColor: '#FF3B30',
      padding: 16,
      borderRadius: 8,
      margin: 8,
      height: 70,
      width: 200,
    },
    gambar:{
      flex: 0,
      height: 200,
      backgroundColor: '#ffff',
    },

  });
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
          <View style={styles.tombolAngka}>
            <Text style={styles.angka}>{number}</Text>
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
  
    return (
      <View
        style={styles.kotakHasil}>
        <Text
          style={styles.hasil}>{displayValue}</Text>
        {rows}
        <TouchableOpacity onPress={handleDeletePress}>
          <View
            style={styles.TombolHapus}>
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
  const Gambar = () => {
    return(
      <View style={styles.gambar}>
        <Text style={{color:'#154198', textAlign:'center'}}>GAMBAR</Text>
      </View>
    );
  };
  
  
  
  
  export default Quiz;