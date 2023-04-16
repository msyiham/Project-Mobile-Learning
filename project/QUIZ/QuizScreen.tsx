import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,FlatList  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const NumberButton = ({ number, onPress }) => {
  return (
    <TouchableOpacity style={styles.numberButton} onPress={() => onPress(number)}>
      <Text style={styles.numberButtonText}>{number}</Text>
    </TouchableOpacity>
  );
};

const NumberPad = ({ onNumberPress, onDeletePress }) => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'delete']);

  const renderItem = ({ item }) => {
    if (item === 'delete') {
      return (
        <TouchableOpacity style={styles.deleteButton} onPress={onDeletePress}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      );
    } else {
      return <NumberButton number={item} onPress={onNumberPress} />;
    }
  };

  return (
    <FlatList
      data={numbers}
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      style={styles.numberPad}
    />
  );
};

const QuizScreen = ({ navigation, route }) => {
  const { level } = route.params;
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const levels = [
    {
      number: 1,
      questions: [
        { question: '2 x 1 = ?', answer: '2' },
        { question: '2 x 2 = ?', answer: '4' },
        { question: '2 x 3 = ?', answer: '6' },
      ],
    },
    {
      number: 2,
      questions: [
        { question: '2 x 1 = ?', answer: '2' },
        { question: '2 x 2 = ?', answer: '4' },
        { question: '2 x 3 = ?', answer: '6' },
      ],
    },
    {
      number: 3,
      questions: [
        { question: '2 x 1 = ?', answer: '2' },
        { question: '2 x 2 = ?', answer: '4' },
        { question: '2 x 3 = ?', answer: '6' },
      ],
    },
    // Data levels selanjutnya
  ];

  const currentLevel = levels.find((l) => l.number === level);
  const questions = currentLevel.questions;

  const handleAnswerChange = (text) => {
    setAnswer(text);
  };

  const handleNumberPress = (number) => {
    setAnswer(answer + number.toString());
  };

  const handleDeletePress = () => {
    setAnswer(answer.slice(0, -1));
  };

  const handleNextQuestionPress = async () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
      setScore(prevScore => prevScore + 1); // menggunakan setState untuk memperbarui score
      console.log('Score:', score + 1);
      try {
        await AsyncStorage.setItem('score', JSON.stringify(score + 1));
      } catch (error) {
        console.log(error);
      }
    }
  
    if (currentQuestionIndex === questions.length - 1 && answer === currentQuestion.answer) {
      setScore(prevScore => prevScore + 1);
      try {
        await AsyncStorage.setItem('score', JSON.stringify(score + 1));
      } catch (error) {
        console.log(error);
      }
      navigation.navigate('Result', { score: score + 1, total: questions.length }); // menggunakan score + 1 saat navigasi ke halaman Result
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswer('');
    }

    useEffect(() => {
      const loadScore = async () => {
        try {
          const value = await AsyncStorage.getItem('score');
          if (value !== null) {
            setScore(parseInt(value));
          }
        } catch (error) {
          console.log(error);
        }
      };
      loadScore();
    }, []);
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestionIndex].question}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleAnswerChange}
        value={answer}
        placeholder="Jawaban"
        keyboardType="numeric"
      />
      <NumberPad onNumberPress={handleNumberPress} onDeletePress={handleDeletePress}  />
      <TouchableOpacity style={styles.buttonNext} onPress={handleNextQuestionPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  levelText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black'
  },
  buttonText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black'
  },
  answerInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 20,
    color: 'black'
  },
  input: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black'
  },
  Kotakinput: {
    fontSize: 18,
    marginBottom: 20,
    width: 200,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: 'gray'
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black'
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black'
  },
  answerInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 20,
    color: 'black'
  },
  buttonNext: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 80,
  },
  numberButton:{
    backgroundColor: '#1f92d4',
    padding: 16,
    borderRadius: 8,
    margin: 8,
    height: 80,
    width: 80,
  },
  deleteButton:{
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 8,
    margin: 8,
    height: 80,
    width: 80,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black'
  },
});

export default QuizScreen;