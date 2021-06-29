import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleInput = (text) => {
    setEnteredGoal(text);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleInput}
        value={enteredGoal}
        placeholder="Goal"
        style={styles.input} />
      <Button
        onPress={() => props.onHandleSubmit(enteredGoal)}
        title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
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
})

export default GoalInput
