import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabBar from './TaBar';
import ProductList from '../screens/Product_List';

const Routes = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="HomeTab"
          component={TabBar}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{title: 'Products'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
