import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, FlatList, Pressable, Image, Button, SafeAreaView, ScrollView, TextInput } from 'react-native';
import database from './data.json';
import { useNavigation } from "@react-navigation/native";

const SmallFilm = ({ name, rating, image }) => {
    return (
      <View style={styles.smallFilm}>
        <View style={styles.item}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.info}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.text}>{rating} <Image style={{height: 20, width : 20}} source={{uri: 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png'}}/></Text>
              <Text style={styles.button}>Read more</Text> 
            </View>
        </View>
      </View>
    );
};


const listFilm = ({data}) => {

    const [data2, setData] = useState(database);    
    const [list, setList]= useState(data2.concat(data));
    const [searchTerm, setSearchTerm] = useState("");
    const navigation = useNavigation();

    const handleSearchTerm = (e) => {
        setSearchTerm(e);
    };

    return (
       
      <>

      <View style={styles.searchContainer}>
        <Text style={styles.search}>Search a film:</Text>
        <TextInput style={styles.input} onChangeText={handleSearchTerm} placeholder="Enter the name..."/>
      </View>
 
      <ScrollView style={styles.container}>
          
          {list
            .filter((val) => { return val.title.toLowerCase().includes(searchTerm)})
            .map((val, index)=>(

            <Pressable onPress={() => navigation.navigate("Details", val)}>
              <SmallFilm name={val.title} rating={val.rating} image={val.image}/>
            </Pressable>

          ))}
        
      </ScrollView>  
    </>


    )

}

const styles = StyleSheet.create({
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

export default listFilm;