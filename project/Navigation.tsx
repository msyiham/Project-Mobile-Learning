import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
	View,
	Text
} from 'react-native';
import Home from './Home';
import Materi from './Materi';
import Tabel from './Tabel';
import Quiz from './Quiz';
import Pencapaian from './Pencapaian';
// import LevelScreen from './LevelScreen';
import LevelScreen from './QUIZ/LevelScreen';
import QuizScreen from './QUIZ/QuizScreen';
import ResultScreen from './QUIZ/ResultScreen';
const Stack = createNativeStackNavigator();


const MenuNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown : false
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Materi"
                component={Materi}
            />
            <Stack.Screen
                name="Tabel"
                component={Tabel}
            />
            {/* <Stack.Screen
                name="Quiz"
                component={Quiz}
            /> */}
            <Stack.Screen
                name="Pencapaian"
                component={Pencapaian}
            />
            {/* <Stack.Screen
                name="Level"
                component={LevelScreen}
            /> */}
            <Stack.Screen
                name="Level"
                component={LevelScreen}
            />
            <Stack.Screen
                name="Quiz"
                component={QuizScreen}
            />
            <Stack.Screen
                name="Result"
                component={ResultScreen}
            />

        </Stack.Navigator>
    )
}

export default MenuNavigation;