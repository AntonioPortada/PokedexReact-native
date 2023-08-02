/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './views/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Favorites from './views/Favorite';
import About from './views/About';

const App = () => {

  const Tab = createBottomTabNavigator();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} >
      <NavigationContainer>
        <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let icon = '';

            if(route.name === 'Inicio') {
              icon = 'home';
            }
            else if(route.name === 'Favoritos') {
              icon = 'heart';
            }
            else {
              icon = 'information';
            }
            
            return <Icon name={icon} size={25} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}>
          <Tab.Screen name="Inicio" component={Home} />
          <Tab.Screen name="Favoritos" component={Favorites} />
          <Tab.Screen name="Acerca" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
