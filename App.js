import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexFilm from './components/ListFilm/index.js'
import DetailsFilm from "./components/detailsFilm.js";
import Login from "./components/login.js";

const Stack = createNativeStackNavigator();

const Main = () => {

  return (
    <>

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="IndexFilm"
          component={IndexFilm}
          options={{headerShown: false}}
         
        />
        <Stack.Screen
          name="Details"
          component={DetailsFilm}
          initialParams={{
            tile: "Inception",
            description: "jdoiezjdeozi,dsaas",
            rating: "4",
            date: "2016",
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

      </Stack.Navigator>

      </NavigationContainer>
  </>
  );

};




export default Main;