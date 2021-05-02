import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card, TextInput, Button } from 'react-native-paper';

export default function App() {

  const [email, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Welcome to STARPORT
      </Text>
      <TextInput style={styles.input} label="Email" mode="outlined"/>
      <TextInput secureTextEntry={true} style={styles.input} label="Password" mode="outlined"/>
      <Button icon="login-variant" mode="contained" 
      onPress={() => console.log('Pressed')}>Login</Button>
      <Text style={styles.paragraph}>
        Read conditions and Terms
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    paddingLeft: 60,
    paddingRight: 60,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    marginBottom: 24
  }
});