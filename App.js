import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Pages/Home';
import RepositoriosList from './src/Pages/RepositoriosList';
import DetalhesRepositorio from './src/Pages/DetalhesRepositorio';
import ImageBar from './src/Pages/Helpers/NavigationBarImage';
import MyWeb from './src/Pages/Helpers/WebView';

import { Provider } from 'react-redux';
import store from './src/store/index';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Consulta de Repositórios GitHub"
              component={Home}
              options={{
                title: 'Repositórios GitHub', //Set Header Title
                headerStyle: {
                  backgroundColor: '#fff', //Set Header color
                },
                headerTintColor: 'black', //Set Header text color
                headerTitleStyle: {
                  fontWeight: 'bold', //Set Header text style
                },
                headerLeft: () => <ImageBar />,
              }}
            />
            <Stack.Screen
              name="RepositoriosList"
              component={RepositoriosList}
            />
            <Stack.Screen
              name="Detalhes Repositorio"
              component={DetalhesRepositorio}
            />
            <Stack.Screen name="Web" component={MyWeb} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
