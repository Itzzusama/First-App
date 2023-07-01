import { StyleSheet, Text, View, ScrollView, TouchableOpacity, } from 'react-native'
import React from 'react'
import { FlatList, } from 'react-native-gesture-handler'
import Header from '../../components/header'


const Flat = ({ navigation }) => {

  const user = [

    {
      id: 1,
      name: "Graphic Designing"
    },
    {
      id: 2,
      name: "Web Development"
    },
    {
      id: 3,
      name: "Video Editinf"
    },
    {
      id: 4,
      name: "Film Making"
    },
    {
      id: 5,
      name: "Photo Editing"
    },
    {
      id: 6,
      name: "Animation Designer"
    },
    {
      id: 7,
      name: "Cinematography"
    },
    {
      id: 8,
      name: "iPhone Dealer"
    },
  ]

  return (

    <ScrollView>
      <Header title={"Interests"} />

      <View style={{ backgroundColor: "black" }}>

        <Text style={{ textAlign: 'center', fontSize: 18 }}>Following Are Some of My Intereset</Text>
        <FlatList
          data={user}
          renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        />
      </View>
      <View style={{ backgroundColor: 'black' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Information')}>
          <Text style={styles.items}>
            Go To Information
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Education')}>
          <Text style={styles.items}>Go to Education</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.items}>
            Go To Home Screen
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Flat

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: " #fff",
    backgroundColor: "blue",
    borderColor: "yellow",
    borderWidth: 2,
    margin: 10
  },
  items: {
    fontSize: 24,
    padding: 5,
    color: " #fff",
    textAlign: 'center',
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 2,
    margin: 10
  }
})
