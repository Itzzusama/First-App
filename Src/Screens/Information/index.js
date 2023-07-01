
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/header';
// import Login from './components/login';

const Information = ({navigation}) => {
    return (
      // Login
<ScrollView style= {{ }}>
<Header title={"Information"} />
  <View style={{backgroundColor: '#bdb76b',}}>


      <View style={{backgroundColor: 'red', height: 60, borderRadius:  20, borderColor: 'yellow', }}>
        <Text style={{fontSize: 40, textAlign: 'center', borderRadius:  20}}>Name:</Text>
      </View>
      <View style={{backgroundColor: 'black', textAlign: 'center', borderRadius:  20}}>
       <Text style={{textAlign: 'center', fontSize: 20, color: 'yellow', fontStyle: 'italic',borderRadius:  20 }}>Usama Aman</Text> 
      </View> 
      <View style={{backgroundColor:'red', textAlign: 'center',borderRadius:  20}}>
        <Text style={{fontSize: 40, textAlign: 'center',borderRadius:  20}}>City</Text>
      </View>
      <View >
        <Text style={{fontStyle: 'italic', backgroundColor: 'black', color: 'yellow', textAlign: 'center', fontSize: 20,borderRadius: 20}}>Alipur Chattha</Text>
      </View>
      <View style={{backgroundColor:'red', textAlign: 'center', borderRadius:  20}}>
        <Text style={{fontSize: 40, textAlign: 'center'}}>Study</Text>
      </View>
      <View >
        <Text style={{fontStyle: 'italic', backgroundColor: 'black',color: 'yellow', textAlign: 'center', borderRadius: 20, fontSize: 20}}>BSCS</Text>
      </View>

      <View style={{backgroundColor:'red', textAlign: 'center',borderRadius:  20}}>
        <Text style={{fontSize: 40, textAlign: 'center',}}>Contact:</Text>
      </View>
      <View >
        <Text style={{fontStyle: 'italic', backgroundColor: 'black', color: 'yellow', borderRadius: 20, textAlign: 'center', fontSize: 20}}>03081224772</Text>
      </View>
      <View style={{backgroundColor:'red', textAlign: 'center',borderRadius:  20}}>
        <Text style={{fontSize: 40, textAlign: 'center'}}>Email:</Text>
      </View>
      <View >
        <Text style={{fontStyle: 'italic', backgroundColor: 'black', color: 'yellow', borderRadius: 20,  textAlign: 'center', fontSize: 20,}}>usamaman123@Gmail.com</Text>
      </View>
      
      <View style={{backgroundColor:'red', textAlign: 'center', borderRadius:  20}}>
        <Text style={{fontSize: 40, textAlign: 'center'}}>Experience:</Text>
      </View>
      <View >
        <Text style={{fontStyle: 'italic', backgroundColor: 'black', color: 'yellow', borderRadius: 20, textAlign: 'center', fontSize: 20,}}>Fresh</Text>
      </View>
      
      <View style={{backgroundColor:'red', textAlign: 'center', borderRadius:  20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Education')}> 
                 <Text style={{fontSize: 40, textAlign: 'center'}}>Interest:</Text>
        </TouchableOpacity>
      </View>
      <View style>
        <Text style={{fontStyle: 'italic',borderRadius: 20, backgroundColor: 'black', color: 'yellow', textAlign: 'center', fontSize: 20,}}>{'1.Gaming \n 2.Animation \n 3.Programming'}</Text>
      </View>
      
      <TouchableOpacity onPress={()=> navigation.navigate('Experience')}>
        <Text style={{fontStyle: 'italic', textAlign: 'center', fontSize: 30, color: 'black'}}>
          Go To Experience 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Education')}>
        <Text style={{fontStyle: 'italic', textAlign: 'center', fontSize: 30, color: 'black'}}>
          Go To Education
        </Text>
        </TouchableOpacity>
        
      <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
        <Text style={{fontStyle: 'italic', textAlign: 'center', fontSize: 30, color: 'black'}}>
          Go To Home Screen
        </Text>
        </TouchableOpacity>
        
        <Button title='Message' onPress={()=>{ alert("ThanK You for visiting \n \n Have a Nice Day")}} ></Button>

        </View>
</ScrollView>
      
    );
}




const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Information;
