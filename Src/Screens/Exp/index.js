import { ScrollView, StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native'
import React ,{ useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Header from '../../components/header'
const Exp = ({navigation}) => {
  const [headerName, setHeaderName] = useState('Experience');
  const handlePress = () => {
    title('Header Name Changed');
  };
  return (
  <ScrollView>
    <Header title={headerName} />
    <View style={{backgroundColor: 'black', padding: 30}}>
      <Text style={{fontSize:30}}> Work as Event Producer </Text>
    </View>

    <TouchableOpacity>
      <Text style={{color: 'red', backgroundColor: 'yellow', fontSize:17, textAlign: 'center'}}> {'1.In 2020, I have covered the entire event of A Medical Camp, \n Which was organised in Alipur Chattha, \n Same as In 2021 & 2022, I was also the producer of the same  event'} </Text>
      </TouchableOpacity>

    <View style={{backgroundColor: 'black', padding: 30}}>
      <Text style={{fontSize:30, textAlign: 'center'}}> Work as Member in HC Society </Text>
    </View>

    <View>
      <Text style={{color: 'red', backgroundColor: 'yellow', fontSize:17, textAlign: 'center'}}> {'2. During my university career I was a member of society name as "Hayatian Computing Society. \n At that timeI have also shoot,Edit and produce many Video for University'} </Text>
    </View>

    <View style={{backgroundColor: 'black', padding: 30}}>
      <Text style={{fontSize:30, textAlign: 'center'}}> Work as Wordpress,Shopify Developer </Text>
    </View>

    <View>
      <Text style={{color: 'red', backgroundColor: 'yellow', fontSize:17, textAlign: 'center'}}> {'3.I have worked as Wordpress & Shopify Web Developer as a freelancerss duc=ring Covid-19. \n ANd designed many website by using shopify & Wordpress.'} </Text>
    </View>
    
    <TouchableOpacity onPress={()=> navigation.navigate('Information')}>
        <Text style={{ fontSize: 30, textAlign: 'center', color: 'red', borderColor: 'yellow',borderWidth:2}}>
          Go To Information
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Education')}>
    <Text style={{ fontSize: 30, textAlign: 'center', color: 'red', borderColor: 'yellow',borderWidth:2}}>Go to Education</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
        <Text style={{ fontSize: 30, textAlign: 'center', color: 'red', borderColor: 'yellow',borderWidth:2}}>
          Go To Home Screen
        </Text>
        </TouchableOpacity>

    <Button title='Message' onPress={()=>{ alert("ThanK You for visiting \n \n Have a Nice Day")}} ></Button>
    </ScrollView>
  )
}

export default Exp

const styles = StyleSheet.create({})