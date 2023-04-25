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
import Menuperkalian from './TABEL/TabelPerkalianScreen';
import Pencapaian from './Pencapaian';
import LevelScreen from './QUIZ/Perkalian/LevelScreen';
import LevelScreenPembagian from'./QUIZ/Pembagian/LevelScreen';
import QuizScreen from './QUIZ/Perkalian/QuizScreen';
import QuizScreenPembagian from './QUIZ/Pembagian/QuizScreen';
import ResultScreen from './QUIZ/Perkalian/ResultScreen';
import ResultScreenPembagian from './QUIZ/Pembagian/ResultScreen';
import QuizMenu from './Quiz';
import MenuPembagian from './TABEL/TabelPembagianScreen';
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
            <Stack.Screen
                name="Pencapaian"
                component={Pencapaian}
            />
            <Stack.Screen
                name="Quiz"
                component={QuizMenu}
            />
            <Stack.Screen
                name="LevelScreenPerkalian"
                component={LevelScreen}
            />
            <Stack.Screen
                name="LevelScreenPembagian"
                component={LevelScreenPembagian}
            />
            <Stack.Screen
                name="QuizScreenPerkalian"
                component={QuizScreen}
            />
            <Stack.Screen
                name="QuizScreenPembagian"
                component={QuizScreenPembagian}
            />
            <Stack.Screen
                name="ResultPerkalian"
                component={ResultScreen}
            />
            <Stack.Screen
                name="ResultPembagian"
                component={ResultScreenPembagian}
            />
            <Stack.Screen
                name="TabelPerkalian"
                component={Menuperkalian}
            />
            <Stack.Screen
                name="TabelPembagian"
                component={MenuPembagian}
            />

        </Stack.Navigator>
    )
}

export default MenuNavigation;