import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import ListFilm from "./listFilm.js";
import SearchFilm from "./searchFilm.js";
import Imdb from "./imdb.js";
import Add from "./addFilm.js";

const Tab = createBottomTabNavigator;

const Index = () => {

  const [data, setData] = useState([]);
    
  const addfilm=()=>(<><Add data={data} setData={setData}/></>);
  const listFilm =()=>(<><ListFilm data={data} /></>);
  const searchFilm =()=>(<><SearchFilm data={data} /></>);

  return (
    <>
    <NavigationContainer>

        <Tab.Navigator>

          <Tab.Screen 
            name="List"
            component={listFilm}
          />

          <Tab.Screen 
            name="Search"
            component={searchFilm}
          />

          <Tab.Screen 
            name="IMDB"
            component={Imdb}
          /> 

            <Tab.Screen 
            name="Add film"
            component={addfilm}
          />          

      </Tab.Navigator>

    </NavigationContainer>
  </>
  );

};




export default Index;