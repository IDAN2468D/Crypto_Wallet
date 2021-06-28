import React, { useState, useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from './stores/rootReducer';

import Tabs from "./navigation/tabs";
import * as Font from 'expo-font';


const Stack = createStackNavigator();


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const App = () => {

    const customFonts = {
        "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf")
    };

    const [assetsLoaded, setAssetsLoaded] = useState(false);

    const _loadAssetsAsync = async () => {
        await Font.loadAsync(customFonts);
        setAssetsLoaded(true);
    }

    useEffect(() => {
        _loadAssetsAsync();
    });

    return assetsLoaded ? (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'MainLayout'}
                >
                    <Stack.Screen
                        name="MainLayout"
                        component={Tabs}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    ) : (
        <ActivityIndicator size="small" />
    )
}

export default App;