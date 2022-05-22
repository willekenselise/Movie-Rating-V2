import React, {useState} from 'react';
import axios from 'axios';
import { View, Text, SafeAreaView, StyleSheet, TextInput, ScrollView, Image } from 'react-native'

const imdb = () => {

  const link = "http://www.omdbapi.com/?i=tt3896198&apikey=88c30236"
  const [state, setState]= useState({
      s: "",
      results : [],
      selected : {}
  });

  

  const search = () => {
      axios(link + "&s=" + state.s).then(({ data }) => {
          let results = data.Search;
          setState(prevState =>{
                console.log(results);
              return { ...prevState, results: results}
          })
      })
  }

  return (
      <ScrollView>
        <SafeAreaView>

            <View style={styles.searchContainer}>

                <Text style={styles.search}>Search a film:</Text>
                <TextInput 
                    onChangeText={text => setState(prevState =>{ return{...prevState, s: text} })}
                    onSubmitEditing={search}
                    value={state.s}
                    style={styles.input}
                    placeholder="Enter the name..."
                />

            </View>

            <View style={styles.container}>
           
            {state.results.map(result =>(

            <>

                <View style={styles.smallFilm}>
                    <View style={styles.item}>
                        <Image style={styles.image} source={{uri :result.Poster}}  />
                            <View style={styles.info}>
                                <Text style={styles.name}>{result.Title}</Text>
                                <Text style={styles.text}>{result.Type} ({result.Year})</Text>
                            </View>
                    </View>
                </View>

            </>

            ))}

            </View>

        </SafeAreaView>
    </ScrollView>

  );
}



const styles = StyleSheet.create({
    container: {
      flex : '1',
      padding: 20,
    },
    row:{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      margin: 20,
      gap: 10,
    },
    search:{
      textAlign: 'left',
      fontSize: 20,
      fontStyle:'bold',   
    },
    input:{
      border : '1px solid #000',
      padding: 10,
      margin: '10px 20px',
      borderRadius: 15,
    },
    searchContainer:{
      padding: 20,
      display: 'flex',
      gap: 20,
    },       
    image: {
        width: 100,
        height: 150,
    },
    container: {
      flex : '1',
      padding: 20,
    },
    item :{
      display : 'flex',
      flexDirection: 'row',
      paddingBottom: 20,
    },
    image: {
      width: 100,
      height: 150,
    },
    text: {
      color: '#000',
      fontSize: 16,
      width : 200,
      display : 'flex',
      alignItems: 'center'
    },
    info:{
      paddingLeft : 20,
      display: 'flex',
      alignContent: 'flex-start'
    },
    name:{
      fontStyle : 'bold',
      fontSize : 22,
    },
    button:{
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      color: 'white',
      width: 200,
      marginTop: 10,
    },
    search:{
      textAlign: 'left',
      fontSize: 20,
      fontStyle:'bold',   
    },
    input:{
      border : '1px solid #000',
      padding: 10,
      margin: '10px 20px',
      borderRadius: 15,
    },
    searchContainer:{
      padding: 20,
      display: 'flex',
      gap: 20,
    },
    smallFilm:{
      flexDirection: "row",
      alignItems: "center",
    }
  });


export default imdb;

