import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
  );
  }

export default Routes;