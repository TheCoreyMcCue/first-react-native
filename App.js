import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const handleSubmit = goalText => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalText }]);
  }

  return (
    <View style={styles.main}>
      <GoalInput onHandleSubmit={handleSubmit} />
      <FlatList
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem title={itemData.item.value}/>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 50
  }
});
