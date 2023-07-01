import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, password, email, handleSubmit, setPassword, setEmail, name, Alert } from 'react-native'
import React, { useState } from 'react';
import Header from '../../components/header';
// import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
// import TextInputIcon from 'react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputIcon';
// import { TextInput } from 'react-native-gesture-handler';

const handleEmailChange = () => {

    if (!email.includes('@')) {
        setError('Please enter a valid email address');
    } else {
        setError(null);
    }
};

const Forms = () => {
    const [fname, setfname] = useState('')
    const [Sname, setSname] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')

    const [City, setCity] = useState('')
    const [Postal, setPostal] = useState('')
    const [Address, setAddress] = useState('')
    // const [password, setPassword] = useState('')

    // const clearForm = ()=>{
    //     setfname('')
    //     setAddress('')
    //     setCity('')
    //     setEmail('')
    //     setPassword('')
    //     setPhone('')
    //     setPostal('')
    // }

    const handleSubmit = () => {
        // handleEmailChange()
        // Alert.alert(fname+ "/n" Sname+ Email+ City+ Postal+ Address)
        // Alert.alert(password)
        // Alert.alert(Address)
        // Alert.alert(Postal)
        // Alert.alert(City)
        // Alert.alert(Email)
        // Alert.alert(Phone)
        // Alert.alert(Sname)
        // Alert.alert(fname)

        Alert.alert(fname)
        Alert.alert(Sname)
        Alert.alert(Phone)
        Alert.alert(Email)
        Alert.alert(City)
        Alert.alert(Postal)
        Alert.alert(Address)
        Alert.alert(password)
    };

    return (
        <ScrollView >
            <Header title={"Forms"} style={{ backgroundColor: 'blue' }} />
            <View style={{ backgroundColor: 'black' }}>
                <Text style={{ paddingTop: 30, paddingLeft: 20, fontSize: 20 }}>Enter First Name</Text>
                <TextInput placeholder='Enter First Name' style={{ borderColor: 'skyblue', paddingLeft: 10, borderWidth: 3, margin: 20 }}
                    onChangeText={(txt) => setfname(txt)} />

                <View>
                    <Text style={{ fontSize: 20, paddingLeft: 20 }}>Enter Second Name</Text>
                    <TextInput placeholder='Enter Second Name' style={{ borderColor: 'skyblue', paddingLeft: 10, borderWidth: 3, margin: 20 }}
                        onChangeText={(txt) => setSname(txt)} />
                </View>
                <View>
                    <Text style={{ fontSize: 20, paddingLeft: 20 }}>Enter Phone</Text>
                    <TextInput placeholder='Enter Phone' keyboardType='numeric' style={{ borderColor: 'skyblue', borderWidth: 3, paddingLeft: 10, margin: 20 }}
                        onChangeText={(txt) => setPhone(txt)} />
                </View>
                <View>
                    <Text style={{ fontSize: 20, paddingLeft: 20 }}>Enter Email</Text>
                    <TextInput placeholder='Enter Email' style={{ borderColor: 'skyblue', borderWidth: 3, paddingLeft: 10, margin: 20 }}
                        onChangeText={(handleEmailChange) => setEmail(handleEmailChange)} />

                </View>
                <View>
                    <Text style={{ fontSize: 20, paddingLeft: 20 }}>Enter City</Text>
                    <TextInput placeholder='Enter City' style={{ borderColor: 'skyblue', borderWidth: 3, paddingLeft: 10, margin: 20 }}
                        onChangeText={(txt) => setCity(txt)} />
                </View>
                <View>
                    <Text style={{ fontSize: 20, paddingLeft: 20 }}>Enter Postal  Code</Text>
                    <TextInput placeholder='Enter Postal code' keyboardType='numeric' style={{
                        borderColor: 'skyblue', paddingLeft: 10, borderWidth: 3, margin: 20
                    }}
                        onChangeText={(txt) => setPostal(txt)} />
                </View>
                <View>
                    <Text style={{ fontSize: 20, paddingLeft: 20 }}>Enter Address</Text>
                    <TextInput placeholder='Enter Address' style={{ borderColor: 'skyblue', borderWidth: 3, paddingLeft: 10, margin: 20 }}
                        onChangeText={(txt) => setAddress(txt)} />
                </View>
                <View>
                    <Text style={{ fontSize: 20, paddingLeft: 20 }}>Enter Password</Text>
                    <TextInput placeholder='Enter Password' secureTextEntry={true} style={{ borderColor: 'skyblue', borderWidth: 3, paddingLeft: 10, margin: 20 }}
                    />

                </View>
                <Button title='Submit' onPress={() => handleSubmit()}></Button>
            </View>


        </ScrollView>
    )
}

export default Forms


const styles = StyleSheet.create();