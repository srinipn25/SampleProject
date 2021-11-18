/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import GlobalState from './App/context/GlobalState';
 import Cart from './App/Screens/Cart';
 import Restaurants from './App/Screens/Restaurants';

 const Stack = createNativeStackNavigator();

 export default function App () {

   return (
     
     <GlobalState>
     <NavigationContainer >
 
         <Stack.Navigator initialRouteName="Restaurants">
           <Stack.Screen name="Restaurants" component={Restaurants} options={{headerShown: false}}/>
           <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
         </Stack.Navigator>
 
       </NavigationContainer>
     </GlobalState>
   )
 }
 