import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function TabelPerkalian() {
  const numbers = [...Array(10).keys()].map(n => n + 1); // [1, 2, 3, ..., 10]
  const table = numbers.map(i => {
    const row = numbers.map(j => {
      const product = i * j;
      return (
        <Text key={j} style={styles.cell}>
          <Text style={styles.left}>{i}</Text> x{' '}
          <Text style={styles.right}>{j}</Text> ={' '}
          <Text style={styles.result}>{product}</Text>
        </Text>
      );
    });
    return (
    
      <View key={i} style={styles.row}>
        {row}
      </View>
    );
  });

  return <View style={styles.container}>{table}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    color:'black'
  },
  left: {
    marginRight: 5,
  },
  right: {
    marginLeft: 5,
  },
  result: {
    fontWeight: 'bold',
  },
});
