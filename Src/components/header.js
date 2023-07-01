import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const header = (props) => {
  return (
    <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}> {props.title}</Text>
    </View>
  )
}

export default header

const styles = StyleSheet.create({})