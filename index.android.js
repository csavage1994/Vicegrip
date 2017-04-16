/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  AppState,
  AsyncStorage,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './components/store';
import Tracker from './components/Tracker';
import AddItemScreen from './components/AddItemScreen';
import DetailedScreen from './components/DetailedScreen';

export default class tracker extends Component {

  componentWillMount() {
    AppState.addEventListener('change', (state) => {
      if(state === 'background') {
        const currentState = store.getState().tracked;
        AsyncStorage.setItem('trackedItems', JSON.stringify(currentState));
      }
    }) 
  }

  renderScene(route, navigator) {
    switch(route.id) {
      case 'home':
        return <Tracker navigator={navigator} index={0} />
      case 'addItemScreen':
        return <AddItemScreen navigator={navigator} index={1} />
      case 'detailedScreen':
        return <DetailedScreen navigator={navigator} index={1} />
      default:
        return <Tracker navigator={navigator} index={0} />
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{id: 'home', index: 0}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route, routeStack) =>
            Navigator.SceneConfigs.FloatFromBottomAndroid} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('tracker', () => tracker);
