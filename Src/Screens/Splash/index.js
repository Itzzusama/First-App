import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
// import { Image } from 'react-native'



const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Check')
    }, 1000);
  })

  return (

    <View>

      <Image source={require('../../assets/images/my.jpg')}
        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}></Image>

      <View style={{
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        border: 2, borderColor: 'black', borderRadius: 3


      }}>
        <Text style={{ backgroundColor: 'red', fontSize: 50 }}> Welcome </Text>
      </View>

    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})






// import React, { useState, useEffect } from 'react';
// import { View, Text, Animated, StyleSheet, fadeAnim, interpolate } from 'react-native';

// const SplashScreen = () => {
//   const [fadeAnim] = useState(new Animated.Value(0));

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 2000,
//     }).start();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View style={{ ...styles.textContainer, opacity: fadeAnim }}>
//         <Text style={styles.text}>Animated Text</Text>
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   textContainer: {
//     transform: [
//       {
//         translateY: fadeAnim.interpolate({
//           inputRange: [0, 1],
//           outputRange: [100, 0],
//         }),
//       },
//     ],
//   },
//   text: {
//     fontSize: 36,
//     textAlign: 'center',
//   },
// });

// export default SplashScreen;
