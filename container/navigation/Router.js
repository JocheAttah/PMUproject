import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login} from '../../screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [auth, setAuth] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!auth ? (
          <Stack.Screen name="login" component={Login} />
        ) : (
          <Stack.Screen name="home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
