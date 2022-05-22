import React, { useState, useCallback } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


const AddFilm = ({data, setData}) => {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");

const Save = useCallback(() =>{
    setData((state)=>[
        ...state,
        {
            title: title,
            description: description,
            date: date,
            rating: rating,
            image: image,
        }
    ])}, [setData, title, image, description, rating, date])

    return (

        <ScrollView style={styles.container}>
            <Text style={styles.text}>Title:</Text>
            <TextInput style={styles.input} onChangeText={setTitle} value={title} placeholder='Enter the film title...'/>
            <Text style={styles.text}>Description :</Text>
            <TextInput style={styles.input} onChangeText={setDescription} value={description} placeholder='Enter the film description...'/>
            <Text style={styles.text}>Date (years) :</Text>
            <TextInput style={styles.input} onChangeText={setDate} value={date} placeholder='Enter the film year...'/>
            <Text style={styles.text}>Image :</Text>
            <TextInput style={styles.input} onChangeText={setRating} value={image} placeholder='Enter the film image...'/>
            <Text style={styles.text}>Rating :</Text>
            <TextInput style={styles.input} onChangeText={setRating} value={rating} keyboardType='numeric' placeholder='Enter a mark out of 10...'/>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={Save}
                style={styles.button}
            >
                <Text style={styles.btnText}>Add Film</Text>
            </TouchableOpacity>
        </ScrollView>

    )

}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      padding: 20,
      alignContent: 'flex-start',
      //gap: 15,
    },
    text: {
      color: '#000',
      fontSize: 16,
      width : 200,
      display : 'flex',
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 10,
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
      marginTop: 20,
      textAlign: 'center'
    },
    input:{
        borderWidth: 1,
      padding: 10,
      margin: 10,
      borderRadius: 15,
      maxWidth : 300,
    },
    btnText:{
        color: 'white'
    }
    
  });

export default AddFilm;