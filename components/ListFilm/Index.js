import React, { useState } from 'react';
import { Text, View, FlatList, Pressable, Image, Button, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListFilm from "./ListFilm.js";
import SearchFilm from "./SearchFilm.js";
import Imdb from "./Imdb.js";
import Add from "./AddFilm.js";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const Index = () => {

    const [data, setData] = useState([]);
    
    const AddFilmComponent=()=>(<><Add data={data} setData={setData}/></>);
    const ListFilmComponent  =()=>(<><ListFilm data={data} /></>);
    const SearchFilmComponent  =()=>(<><SearchFilm data={data} /></>);

    
  return (

        <Tab.Navigator>

        <Tab.Screen 
            name="List"
            component={ListFilmComponent}
            options={{
              tabBarLabel: 'List Film',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="movie" size={24} color="black" />
              ),
            }}
          />

          <Tab.Screen 
            name="Search"
            component={SearchFilmComponent}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="magnify" size={24} color="black" />
              ),
            }}
          />

            <Tab.Screen 
            name="Add film"
            component={AddFilmComponent}
            options={{
              tabBarLabel: 'Add Film',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="plus-box-outline" size={24} color="black" />
              ),
            }}
          />     

          <Tab.Screen 
            name="Imdb"
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