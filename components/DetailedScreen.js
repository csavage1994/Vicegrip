import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Header from './Header';

class _DetailedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigator={this.props.navigator} title={'test'} back={true} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
})

const mapStateToProps = (store) => {
  return {
    tracked: store.tracked
  };
}

export default DetailedScreen = connect(mapStateToProps, null)(_DetailedScreen);