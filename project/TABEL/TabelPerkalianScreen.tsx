import React, { Component } from 'react';
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
import TabelPerkalian from './Perkalian';
  const MenUPerkalian = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tabel Perkalian</Text>
        <TabelPerkalian></TabelPerkalian>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFC6FF',
    },
    title: {
      fontSize: 20,
      marginBottom: 10,
      textAlign: 'center',
      color: '#154198',
      fontWeight: 'bold',
    },
  });

  export default MenUPerkalian;