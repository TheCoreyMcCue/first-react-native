import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const handleInput = (text) => {
    setEnteredGoal(text);
  }

  const handleSubmit = () => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInput}
          value={enteredGoal}
          placeholder="Goal"
          style={styles.input} />
        <Button
          onPress={handleSubmit}
          title="Add" />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={itemData =>
          <View style={styles.listItem}>
            <Text> {itemData.item.value}</Text>
          </View>}
      />
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
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
