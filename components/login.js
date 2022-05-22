import React, {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';


const login = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

      <View style={styles.container}>
        <Text style={styles.name}> MovieRating++</Text>
        <TextInput style={styles.input} placeholder='Email..'/>
        <TextInput style={styles.input} secureTextEntry placeholder='Password'/>
        <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('IndexFilm')}
                style={styles.button}
        >
            <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  input:{
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 15,
    width : 300,
  },
  container:{
    flex: 1,
    display : 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
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
  btnText:{
    color: 'white'
  },
  name:{
    fontSize: 32,
    //fontStyle : 'bold',
  }
});

export default login;