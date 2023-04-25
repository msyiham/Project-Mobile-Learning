import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import levels from './level';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LevelScreen = ({ navigation }) => {
  const levels = Array.from({ length: 20 }, (v, i) => i + 1);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const loadScore = async () => {
      try {
        const value = await AsyncStorage.getItem('score');
        if (value !== null) {
          const parsedValue = JSON.parse(value);
          setStars(parsedValue);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadScore();
  }, []);

  const handleLevelPress = (level) => {
    navigation.navigate('QuizScreenPerkalian', { level });
  };

  const getStarColor = (level, index, stars) => {
    if (stars === 0) {
      return '#FFFF'; // warna putih untuk semua bintang
    } else if (stars === 1) {
      if (level >= 50 && index === 0) {
        return '#FFD700'; // warna solid untuk bintang pertama
      } else {
        return '#FFFF'; // warna putih untuk bintang kedua dan ketiga
      }
    } else if (stars === 2) {
      if (level >= 50 && index === 0) {
        return '#FFD700'; // warna solid untuk bintang pertama
      } else if (level >= 75 && index === 1) {
        return '#FFD700'; // warna solid untuk bintang kedua
      } else {
        return '#FFFF'; // warna putih untuk bintang ketiga
      }
    } else if (stars === 3) {
      if (level >= 50 && index === 0) {
        return '#FFD700'; // warna solid untuk bintang pertama
      } else if (level >= 75 && index === 1) {
        return '#FFD700'; // warna solid untuk bintang kedua
      } else if (level >= 100 && index === 2) {
        return '#FFD700'; // warna solid untuk bintang ketiga
      } else {
        return '#FFFF'; // warna putih untuk level yang belum mencapai target
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Perkalian</Text>
      {chunk(levels, 5).map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((level) => (
            <TouchableOpacity
              key={level}
              style={styles.levelButton}
              onPress={() => handleLevelPress(level)}
            >
              <Text style={styles.levelButtonText}>{level}</Text>
              <View style={styles.starContainer}>
                <Icon
                  name="star"
                  color={getStarColor(level, 0)}
                  size={14}
                />
                <Icon
                  name="star"
                  color={getStarColor(level, 1)}
                  size={14}
                />
                <Icon
                  name="star"
                  color={getStarColor(level, 2)}
                  size={14}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};


const chunk = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'#FFC6FF',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: '#154198',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  levelButton: {
    backgroundColor: '#BDB2FF',
    padding: 10,
    borderRadius: 5,
    width: '18%',
    margin: 5
  },
  levelButtonText: {
    color: '#154198',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',   
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
});

export default LevelScreen;
