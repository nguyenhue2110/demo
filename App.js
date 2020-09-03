/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();
import HomeScreen from './src/Screen/home.js';
import DetailsScreen from './src/Screen/detail.js';
// function HomeScreen({navigation, route}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() =>
//           navigation.navigate('Detail', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           })
//         }
//       />
//     </View>
//   );
// }

// function DetailsScreen({route, navigation}) {
//   const {itemId} = route.params;
//   const {otherParam} = route.params;
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Text>itemid: {JSON.stringify(itemId)}</Text>
//       <Text>other: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// }
export default function App() {
  return (
    //<HomeScreen />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details" headerMode="none">
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
