import { useRoute } from "@react-navigation/native";
const { ScrollView,View, Text, Image, StyleSheet } = require("react-native");

const DetailsScreen = () => {
  const route = useRoute();
  const { title, date, description, rating, image } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image}/>
        <View style={styles.content}>
          <Text style={{ fontSize: 32 }}>{title}</Text>
          <Text style={{ fontSize: 20 , display: 'flex', flexDirection: 'row', alignItems: 'center'}}> ({date}) {rating} <Image style={{height: 20, width : 20}} source={{uri: 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png'}}/></Text>
          <Text style={styles.text}>{description}</Text>
          <Text style={{ fontSize: 16 }}></Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex : 1,
    height: 200,
  },
  container:{
    flex: 1,
  },
  content:{
    padding: 20,
  },
  text:{
    marginTop: 20,
  }
});

export default DetailsScreen;