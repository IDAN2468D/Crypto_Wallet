import React, {useState, useEffect} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import {ActivityIndicator} from 'react-native'

import Tabs from "./navigation/tabs";
import * as Font from 'expo-font';


const Stack = createStackNavigator();

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
    ): (
        <ActivityIndicator size="small" />
    )
}

export default App;