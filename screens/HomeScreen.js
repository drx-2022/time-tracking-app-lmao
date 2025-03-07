import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Timer from '../components/Timer';

export default function HomeScreen({ navigation, timers, setTimers }) {
  const handleStartStop = (id) => {
    setTimers(timers.map(timer => {
      if (timer.id === id) {
        return { ...timer, isRunning: !timer.isRunning };
      }
      return timer;
    }));
  };

  const handleDelete = (id) => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  const renderItem = ({ item }) => (
    <Timer
      timer={item}
      onStartStop={() => handleStartStop(item.id)}
      onEdit={() => navigation.navigate('EditTimer', { timer: item })}
      onDelete={() => handleDelete(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('CreateTimer')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <FlatList
        data={timers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
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
  list: {
    flex: 1,
  },
  addButton: {
    backgroundColor: '#2196F3',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
}); 