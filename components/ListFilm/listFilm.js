import React, { useState } from 'react';
import { Text, View, FlatList, Pressable,StyleSheet, Image, Button, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from "@react-navigation/native";
import database from './data.json';


const listTab = [
  {
    name : 'best rated',
    status : 'rating'
  },
  {
    name : 'alphabetic order',
    status : 'alphabetical'
  },
  {
    name : 'the latest',
    status : 'years'
  }
];

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

    const [status, setStatus] = useState('all');
    const [data2, setData] = useState(database);    
    const [list, setList]= useState(data2.concat(data));
    const [dataList, setDataList] = useState(list);
    const navigation = useNavigation();

    const setStatusFilter = status =>{

      if(status == 'all'){
        setStatus(status);
      }else if(status == 'rating'){
        setDataList([...list.sort((a, b) => b.rating-a.rating)]);
      }else if(status == 'alphabetical') {
        setDataList([...list.sort((a, b) => a.title.localeCompare(b.title))]);
      }else if(status == 'years') {
        setDataList([...list.sort((a, b) => b.date-a.date)]);
      }

      setStatus(status);

    }

    return (
       
      <>

        <View style={styles.row}>
          {listTab.map((e, index) => (
            <TouchableOpacity
              onPress={() => setStatusFilter(e.status)}
              key={index}
              style={styles.filter}>
              <Text style={styles.textFilter}>{e.name}</Text>
            </TouchableOpacity>
            ))
        }
        </View>

        <ScrollView style={styles.container}>
        
          { dataList.map((val, index)=>(
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
    flex : 1,
    padding: 20,
  },
  row:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 20,
    //gap: 10,
  },
  item :{
    display : 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  filter:{
    padding: 8,
    backgroundColor: '#392a50',
    borderRadius: 5,
    minWidth: 80,
    textAlign: 'center',
    color: 'white',
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
    //fontStyle : 'bold',
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
    //fontStyle:'bold',   
  },
  input:{
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
  searchContainer:{
    padding: 20,
    display: 'flex',
    //gap: 20,
  },
  smallFilm:{
    flexDirection: "row",
    alignItems: "center",
  },
  textFilter:{
    color:'white'
  }
})


export default listFilm;