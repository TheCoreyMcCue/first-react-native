import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Goal" style={styles.input}/>
        <Button title="Add"/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%'
  }
});
