import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { addTracked } from './actions';

import Header from './Header';

const defaultTracks = ['Drink Coffee', 'Walk the dog', 'Get to work on time', 'Smoke', 'Drink', 'Lie', 'Video games'];
const { height, width } = Dimensions.get('screen');

class _AddItemScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleInput(e) {
    this.setState({
      input: e
    });
  }

  handleSubmit() {
    this.props.dispatch(addTracked(this.state.input));
    this.props.navigator.pop();
  }

  render() {

    const rand = Math.floor(Math.random() * defaultTracks.length);

    return (
      <View style={styles.container}>
        <Header back={true} title='New Tracker' navigator={this.props.navigator} />
        <View style={styles.inputField}>
          <Text style={styles.fieldName}>
            Name:
          </Text>
           <TextInput placeholder={defaultTracks[rand]} value={this.state.input} onChangeText={this.handleInput.bind(this)} style={styles.input} />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.submitText}>Create Tracker</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    store: store
  };
}

export default AddItemScreen = connect(mapStateToProps, null)(_AddItemScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: 200
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 80,
  },
  fieldName: {
    fontSize: 16,
    padding: 6,
    borderRadius: 2,
  },
  submitButton: {
    height: 45,
    width: 180,
    backgroundColor: '#26a69a',
    position: 'absolute',
    bottom: 15,
    borderRadius: 3,
    left: (width / 2 - 90),
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    fontSize: 20,
  }
})