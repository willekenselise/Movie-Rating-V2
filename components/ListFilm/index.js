import React, { useState } from 'react';
import { Text, View, FlatList, Pressable, Image, Button, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListFilm from "./listFilm.js";
import SearchFilm from "./searchFilm.js";
import Imdb from "./imdb.js";
import Add from "./addFilm.js";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const Index = () => {

    const [data, setData] = useState([]);
    
    const addfilm=()=>(<><Add data={data} setData={setData}/></>);
    const listFilm =()=>(<><ListFilm data={data} /></>);
    const searchFilm =()=>(<><SearchFilm data={data} /></>);

    
  return (

        <Tab.Navigator>

        <Tab.Screen 
            name="List"
            component={listFilm}
            options={{
              tabBarLabel: 'List Film',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="movie" size={24} color="black" />
              ),
            }}
          />

          <Tab.Screen 
            name="Search"
            component={searchFilm}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="magnify" size={24} color="black" />
              ),
            }}
          />

            <Tab.Screen 
            name="Add film"
            component={addfilm}
            options={{
              tabBarLabel: 'Add Film',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="plus-box-outline" size={24} color="black" />
              ),
            }}
          />     

          <Tab.Screen 
            name="IMDB"
            component={Imdb}
            options={{
              tabBarLabel: 'IMDB',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="search-web" size={24} color="black" />
              ),
            }}
          /> 

        </Tab.Navigator>
  );
};

export default Index;