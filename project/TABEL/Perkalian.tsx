import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function TabelPerkalian() {
  const numbers = [...Array(10).keys()].map(n => n + 1); // [1, 2, 3, ..., 10]
  const table = numbers.map(i => {
    const row = numbers.map(j => {
      const product = i * j;
      return (
        <View style={styles.kolom}>
          <Text key={j} style={styles.cell}>
            <Text style={styles.left}>{i}</Text> x{' '}
            <Text style={styles.right}>{j}</Text> ={' '}
            <Text style={styles.result}>{product}</Text>
          </Text>
        </View>
      );
    });
    return (
      <View key={i} style={styles.row}>
        {row}
      </View>
    );
  });

  return <ScrollView>
            <ScrollView horizontal={true} style={styles.container}>
              <View>{table}</View>
            </ScrollView>
          </ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFC6FF',
  },
  kolom: {
    width:125,
    height:50,
    backgroundColor:'#BDB2FF',
    alignContent:'center',
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
    fontSize:15,
    textAlign: 'center',
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    color: 'black'
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
