import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResultScreen = ({ route, navigation }) => {
  const { score, total } = route.params;
  const percentage = ((score / total) * 100).toFixed(2);

  const handlePlayAgain = () => {
    navigation.navigate('LevelScreenPerkalian');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Score:</Text>
      <Text style={styles.score}>
        {score}/{total} ({percentage}%)
      </Text>
      <TouchableOpacity style={styles.playAgainButton} onPress={handlePlayAgain}>
        <Text style={styles.playAgainButtonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC6FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#9BF6FF'
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#154198'
  },
  playAgainButton: {
    backgroundColor: '#FFADAD',
    padding: 10,
    borderRadius: 5,
  },
  playAgainButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultScreen;
