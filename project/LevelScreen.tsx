import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LevelScreen({ route }) {
  const { level } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Level {level}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
