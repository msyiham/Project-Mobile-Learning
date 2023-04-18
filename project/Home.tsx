import React, { Component } from 'react';
import * as Progress from 'react-native-progress';
import {
    SafeAreaView,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Aplikasi Funmath</Text>
      <Logo/>
      <Pencapaian/>
      <Menu navigation={navigation}/>
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
  button: {
    backgroundColor: '#BDB2FF',
    borderRadius: 30,
    padding: 10,
    width: 200,
    marginBottom: 10,
    marginTop: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#154198',
    textAlign: 'center',
    fontWeight:'bold'
  },
  pencapaian: {
    fontSize: 18,
    color: '#154198',
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  progress: {
    marginTop: 10,
    marginBottom: 10,
    width: 200,
  },
});
const Logo = () => {
  // Try removing the `height: '100%'` on the parent View.
  // The parent will not have dimensions, so the children can't expand.
  return (
    <Image source={require('./LOGO.jpg')} style={styles.logo}/>
  );
};
const Pencapaian = () => {
  return(
    <View>
      <Progress.Bar progress={0.5} width={200}  color={'#154198'} style={styles.progress}/>
      <Text style={styles.pencapaian}>50 % Pencapaian</Text>
    </View>
  );
};
const Menu = ({navigation}) => {
  return(
    <View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Materi")} >
        <Text style={styles.buttonText}>MATERI</Text>
      </TouchableOpacity>
    
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Tabel")}>
        <Text style={styles.buttonText}>TABEL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Level")}>
        <Text style={styles.buttonText}>QUIZ</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Pencapaian")}>
        <Text style={styles.buttonText}>PENCAPAIAN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;