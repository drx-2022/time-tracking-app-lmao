import React from 'react';
import { View, StyleSheet } from 'react-native';
import TimerForm from '../components/TimerForm';

export default function EditTimerScreen({ route, navigation, timers, setTimers }) {
  const { timer } = route.params;

  const handleEdit = (title, project) => {
    setTimers(timers.map(t => {
      if (t.id === timer.id) {
        return { ...t, title, project };
      }
      return t;
    }));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TimerForm
        initialTitle={timer.title}
        initialProject={timer.project}
        onSubmit={handleEdit}
        onCancel={() => navigation.goBack()}
        isEdit
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