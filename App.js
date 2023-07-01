// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Splash from './Src/Screens/Splash';
import Education from './Src/Screens/Education';
import Home from './Src/Screens/Home';
import Information from './Src/Screens/Information';
import Exp from './Src/Screens/Exp';
import Forms from './Src/Screens/Forms';
import Flat from './Src/Screens/FlatScreen';

// import header from './Src/components/header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {} from 'react-navigation'
import { createDrawerNavigator } from '@react-navigation/drawer';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

function Check() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Image source={require('./Src/assets/images/home.png')} style={{ height: 24, width: 24 }} />
          )
        }
      }} />
      <Tab.Screen name="Information" component={Information}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require('./Src/assets/images/info.png')} style={{ height: 24, width: 24 }} />
            )
          }
        }} />
      <Tab.Screen name="Experience" component={Exp}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require('./Src/assets/images/exp.jpg')} style={{ height: 24, width: 24 }} />
            )
          }
        }} />
      <Tab.Screen name="Education" component={Education}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require('./Src/assets/images/edu.png')} style={{ height: 24, width: 24 }} />
            )
          }
        }} />
      <Tab.Screen name="Forms" component={Forms}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require('./Src/assets/images/forms.png')} style={{ height: 24, width: 24 }} />
            )
          }
        }} />

      <Tab.Screen name="Interest" component={Flat}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require('./Src/assets/images/interest.png')} style={{ height: 24, width: 24 }} />
            )
          }
        }} />
    </Tab.Navigator>
  );
}
// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={Home}/>
//         <Drawer.Screen name="Education" component={Education}/>
//     </Drawer.Navigator>
//   );
// }
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name="Splash" component={Splash} />
        {/* <Stack.Screen name='Drawer' component={MyDrawer}/> */}
        <Stack.Screen name='Check' component={Check} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Experience" component={Exp} />
        <Stack.Screen name="Forms" component={Forms} />
        <Stack.Screen name="Flat" component={Flat} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

