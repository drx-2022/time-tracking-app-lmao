import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TimerForm from '../components/TimerForm';

export default function CreateTimerScreen({ navigation, timers, setTimers }) {
  const handleCreate = (title, project) => {
    const newTimer = {
      id: Date.now().toString(),
      title,
      project,
      elapsed: 0,
      isRunning: false,
    };
    
    setTimers([...timers, newTimer]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TimerForm
        onSubmit={handleCreate}
        onCancel={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
}); 