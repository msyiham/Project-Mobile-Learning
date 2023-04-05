import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Level({ navigation }) {
  const levels = [];

  for (let i = 1; i <= 20; i += 5) {
    const row = [];

    for (let j = i; j <= i + 4; j++) {
      if (j <= 20) {
        row.push(
          <TouchableOpacity style={styles.button} key={j} onPress={() => navigation.navigate('Level', { level: j })}>
            <Text style={styles.buttonText}>{j}</Text>
            <View style={styles.stars}>
              {[...Array(3)].map((_, index) => (
                <Icon name="star" size={20} color={j <= (index + 1) * 5 ? "yellow" : "gray"} key={index} solid={j <= (index + 1) * 5} />
              ))}
            </View>
          </TouchableOpacity>
        );
      }
    }

    levels.push(
      <View style={styles.row} key={i}>
        {row}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {levels}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#f1d67b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 5,
    flex: 1,
    width: 50,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
  },
});
