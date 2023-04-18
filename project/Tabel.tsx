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

  const Tabel = ({navigation}) => {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TabelPerkalian")}>
            <Text style={styles.buttonText}>PERKALIAN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Pencapaian")}>
            <Text style={styles.buttonText}>PEMBAGIAN</Text>
          </TouchableOpacity>
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
    button: {
      backgroundColor: '#BDB2FF',
      borderRadius: 30,
      padding: 10,
      width: 200,
      marginBottom: 25,
      marginTop: 5,
    },
    buttonText: {
      fontSize: 18,
      color: '#154198',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

  export default Tabel;