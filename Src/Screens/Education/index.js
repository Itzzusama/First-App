import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Header from '../../components/header';
// import Login from './components/login';

const Education = ({ navigation }) => {
  const [headerName, setHeaderName] = useState('Education');
  const handlePress = () => {
    title('Matriculation');
  };


  return (
    // Login
    <ScrollView >
      <Header title={headerName} />
      <View style={{ backgroundColor: '#bdb76b' }}>
        {/* <Text style={{textAlign: 'center', backgroundColor: 'yellow', color: 'black', fontSize: 50, fontWeight: 'bold', borderRadius: 20 }}>Education</Text> */}
        <View style={{ backgroundColor: 'red', height: 60, borderRadius: 20 }}>
          <TouchableOpacity onPress={() => setHeaderName("Matriculation")}>
            <Text style={{ fontSize: 40, textAlign: 'center', borderRadius: 20 }}>Matriculation</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: 'black', textAlign: 'center', borderRadius: 20 }}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: 'yellow', fontStyle: 'italic', borderRadius: 20 }}>{'Matriculation from Wazir Hasan Memorial School \n ALi Pur Chattha \n Scored A Grade in Gujranwala Board'}</Text>
        </View>
        <View style={{ backgroundColor: 'red', textAlign: 'center', borderRadius: 20 }}>
          <Text style={{ fontSize: 40, textAlign: 'center', borderRadius: 20 }} onPress={() => setHeaderName("Intermidiate")}>Intermidiate</Text>
        </View>
        <View >
          <Text style={{ fontStyle: 'italic', backgroundColor: 'black', color: 'yellow', textAlign: 'center', fontSize: 20, borderRadius: 20 }}>{'Intermidiate from Punjab Group Of Colleges \n ALi Pur Chattha \n Scored A Grade in Gujranwala Board'}</Text>
        </View>
        <View style={{ backgroundColor: 'red', textAlign: 'center', borderRadius: 20 }}>
          <Text style={{ fontSize: 40, textAlign: 'center' }} onPress={() => setHeaderName("Graduation")}>Graduation</Text>
        </View>
        <View >
          <Text style={{ fontStyle: 'italic', backgroundColor: 'black', color: 'yellow', textAlign: 'center', borderRadius: 20, fontSize: 20 }}>{'Graduation from University Of Gujrat \n Gujrat \n Done BSCs'}</Text>
        </View>
        <View style={{ backgroundColor: 'red', textAlign: 'center', borderRadius: 20 }}>
          <Text style={{ fontSize: 40, textAlign: 'center', }} onPress={() => setHeaderName("Contact")}>Contact:</Text>
        </View>
        <View >
          <Text style={{ fontStyle: 'italic', backgroundColor: 'black', color: 'yellow', borderRadius: 20, textAlign: 'center', fontSize: 20 }}>03071224772</Text>
        </View>
        <View style={{ backgroundColor: 'red', textAlign: 'center', borderRadius: 20 }}>
          <Text style={{ fontSize: 40, textAlign: 'center' }} onPress={() => setHeaderName("Email")}>Email:</Text>
        </View>
        <View >
          <Text style={{ fontStyle: 'italic', backgroundColor: 'black', color: 'yellow', borderRadius: 20, textAlign: 'center', fontSize: 20, }}>usamaman123@Gmail.com</Text>
        </View>

        <View style={{ backgroundColor: 'red', textAlign: 'center', borderRadius: 20 }}>
          <Text style={{ fontSize: 40, textAlign: 'center' }} onPress={() => setHeaderName("Experience")}>Experience:</Text>
        </View>
        <View >
          <Text style={{ fontStyle: 'italic', backgroundColor: 'black', color: 'yellow', borderRadius: 20, textAlign: 'center', fontSize: 20, }}>Fresh</Text>
        </View>

        <View style={{ backgroundColor: 'red', textAlign: 'center', borderRadius: 20 }}>
          <Text style={{ fontSize: 40, textAlign: 'center' }} onPress={() => setHeaderName("Interest")}>Interest:</Text>
        </View>
        <View style>
          <Text style={{ fontStyle: 'italic', borderRadius: 20, backgroundColor: 'black', color: 'yellow', textAlign: 'center', fontSize: 20, }}>{'1.Gaming \n 2.Animation \n 3.Programming'}</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Information')}>
          <Text style={{ fontStyle: 'italic', textAlign: 'center', fontSize: 30, color: 'black' }}>
            Go To Information
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Experience')}>
          <Text style={{ fontStyle: 'italic', textAlign: 'center', fontSize: 30, color: 'black' }}>
            Go To Experience
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{ fontStyle: 'italic', textAlign: 'center', fontSize: 30, color: 'black' }}>
            Go To Home Screen
          </Text>
        </TouchableOpacity>


        <Button title='Message' onPress={() => { alert("ThanK You for visiting \n \n Have a Nice Day") }} ></Button>
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

export default Education;
