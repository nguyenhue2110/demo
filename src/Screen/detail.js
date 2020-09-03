import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import logo from '../images/satecologo.png';
import check from '../images/check.png';
export default class DetailsScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <>
        <View>
          <Image source={logo} style={styles.logo} />
          <View style={styles.viewcheck}>
            <Text>N dematricule correct</Text>
            <Image source={check} style={styles.check} />
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
  check: {
    width: 30,
    height: 30,
  },
  viewcheck: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
