import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import logo from '../images/satecologo.png';

//import DetailsScreen from './src/Screen/detail';
export default class HomeScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <>
        <View>
          <Image source={logo} style={styles.logo} />
          <View style={styles.container}>
            <Text style={styles.textstyle}>Veuillez indiquer </Text>
            <Text>votre n dematricule </Text>
          </View>
          <View>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.btnlogin}
              title="Enter"
              onPress={() => {
                navigation.navigate('Details');
              }}>
              <Text style={styles.text}>Enter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  logo: {
    marginTop: 20,
    width: 100,
    height: 100,
  },
  textstyle: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 40,
    fontSize: 20,
    backgroundColor: 'white',
  },
  button: {
    height: 55,
    width: 290,
    justifyContent: 'center',
    marginTop: 30,
    marginHorizontal: 50,
  },
  btnlogin: {
    height: 55,
    width: 290,
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
