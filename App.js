
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { LandingScreen } from './com/ssp/screens/Landing';
import { ContentScreen } from './com/ssp/screens/Content';

export default App = StackNavigator({
  Landing: { screen: LandingScreen },
  Content: { screen: ContentScreen }
});

