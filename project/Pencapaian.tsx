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
import Level from './level';
  const Pencapaian = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pencapaian</Text>
        <Level/>
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
      textAlign: 'center',
      color: '#154198',
      fontWeight: 'bold',
    },
  });

  export default Pencapaian;