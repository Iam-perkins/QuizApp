import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Home from './app/(tabs)/Home';
import chooseLevel from './app/chooseLevel';
import { RootStackParamList } from '@/screens/types';

const Stack = createStackNavigator<RootStackParamList>();

const navigationOptions: StackNavigationOptions = {
  headerShown: false,
};

const App: React.FC = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="chooseLevel" component={chooseLevel} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;