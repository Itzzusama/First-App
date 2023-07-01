import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../../components/header'
const Home = ({ navigation }) => {
  return (



    <View style={{ backgroundColor: 'Red' }}>

      {/* <Image source={require('../../assets/images/home.png')} /> */}
      <Header title={"Home"} des={'Home Screen'} />


      <View style={{ backgroundColor: 'black', height: '100%', alignContent: 'center', justifyContent: 'center' }}>
        {/* <Image source={require('../../assets/images/my.jpg')}
        style={{ width: '30%', height: '30%',paddingBottom:10, alignItems: 'center', justifyContent: 'center' }}></Image> */}
        <View>
          {/* <Image source={require('../../assets/images/my.jpg')}
        style={{ flex:1, alignSelf:'center',width: 124, height: 124,paddingBottom:100, alignItems: 'center', justifyContent: 'center', paddingLeft: 90 }}></Image> */}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Information')}>
          <Text style={{ fontSize: 40, textAlign: 'center', color: 'red', borderColor: 'skyblue', borderWidth: 2 }}>Go to Information</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Education')}>
          <Text style={{ fontSize: 40, textAlign: 'center', color: 'red', borderColor: 'skyblue', borderWidth: 2 }}>Go to Education</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Experience')}>
          <Text style={{ fontSize: 40, textAlign: 'center', color: 'red', borderColor: 'skyblue', borderWidth: 2 }}>Go to Experience</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Forms')}>
          <Text style={{ fontSize: 40, textAlign: 'center', color: 'red', borderColor: 'skyblue', borderWidth: 2 }}>Go to Forms</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Flat')}>
          <Text style={{ fontSize: 40, textAlign: 'center', color: 'red', borderColor: 'skyblue', borderWidth: 2 }}>Go to Interest</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})