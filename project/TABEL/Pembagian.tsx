import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
export default function TabelPembagian() {
  const numbers = [...Array(10).keys()].map(n => n + 1); // [1, 2, 3, ..., 10]
  const table = numbers.map(i => {
    const column = numbers.map(j => {
      const product = i * j;
      return (
        <View style={styles.hitungan}>
          <Text key={j} style={styles.cell}>
            <Text style={styles.left}>{product}</Text> :{' '}
            <Text style={styles.right}>{i}</Text> ={' '}
            <Text style={styles.result}>{j}</Text>
          </Text>
        </View>
      );
    });
    return (
      <View>
          <Text style={{fontWeight:'bold', color:'black', fontSize: 20, textAlign:'center'}}>
            <Text>{i}</Text>
          </Text>
          <View style={{ flexDirection: 'column', flexWrap: 'wrap', borderRadius: 10, backgroundColor:'#FFADAD', marginHorizontal:5}}>
            <View style={{ width: '50%', padding: 5 }}>
            {column}
            </View>
          </View>
      </View>

    );
  });

  return <ScrollView>
            <ScrollView horizontal={true} style={styles.container}>
              <View style={{flexDirection:'row', marginBottom: 50}}>{table}</View>
            </ScrollView>
          </ScrollView>;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FFC6FF',
      flexDirection: 'row',
    },
    hitungan: {
      width:130,
      height:50,
      marginHorizontal: 5,
      alignContent:'center',
    },
    column: {
      flexDirection: 'column',
      borderColor: 'black',
    },
    cell: {
      flex: 1,
      fontSize:20,
      fontFamily:'Arial',
      textAlign: 'center',
      borderLeftColor: 'black',
      color: 'black',
      textAlignVertical: 'center',
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