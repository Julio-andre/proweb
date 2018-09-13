import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeComponent from './src/home'

const App = StackNavigator({
  Home:{
    screen:HomeComponent
  }
});

export default App;
