import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { millisecondsToHuman } from '../utils/TimerUtils';

export default function Timer({ timer, onStartStop, onEdit, onDelete }) {
  const [elapsed, setElapsed] = useState(timer.elapsed);

  useEffect(() => {
    let intervalId;
    if (timer.isRunning) {
      intervalId = setInterval(() => {
        setElapsed(prev => prev + 1000);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timer.isRunning]);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{timer.title}</Text>
      <Text style={styles.project}>{timer.project}</Text>
      <Text style={styles.elapsed}>{millisecondsToHuman(elapsed)}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, styles.startStopButton]}
          onPress={onStartStop}
        >
          <Text style={styles.buttonText}>
            {timer.isRunning ? 'Stop' : 'Start'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={onEdit}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={onDelete}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  project: {
    color: '#666',
  },
  elapsed: {
    fontSize: 24,
    fontWeight: '200',
    padding: 15,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  startStopButton: {
    backgroundColor: '#2196F3',
  },
  editButton: {
    backgroundColor: '#4CAF50',
  },
  deleteButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
}); 