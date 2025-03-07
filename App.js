import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateTimerScreen from './screens/CreateTimerScreen';
import EditTimerScreen from './screens/EditTimerScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [timers, setTimers] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} timers={timers} setTimers={setTimers} />}
        </Stack.Screen>
        <Stack.Screen name="CreateTimer">
          {(props) => <CreateTimerScreen {...props} timers={timers} setTimers={setTimers} />}
        </Stack.Screen>
        <Stack.Screen name="EditTimer">
          {(props) => <EditTimerScreen {...props} timers={timers} setTimers={setTimers} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
