import React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import TabelPembagian from './Pembagian';
  const MenuPembagian = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tabel Pembagian</Text>
        <TabelPembagian></TabelPembagian>
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

  export default MenuPembagian;