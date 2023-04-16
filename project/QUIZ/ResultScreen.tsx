import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResultScreen = ({ navigation }) => {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handlePlayAgain = () => {
    navigation.navigate('Level');
  };
  const clearData = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Semua data berhasil dihapus');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const loadScore = async () => {
      try {
        const value = await AsyncStorage.getItem('score');
        if (value !== null) {
          const parsedValue = JSON.parse(value);
          setScore(parsedValue);
          setTotal(parsedValue); // karena dalam contoh program sebelumnya, skor yang disimpan adalah skor yang sudah ditambah 1
          setPercentage(((parsedValue / parsedValue) * 100).toFixed(2));
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadScore();
  }, []);

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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  playAgainButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  playAgainButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultScreen;
