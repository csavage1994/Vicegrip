import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { setTitle } from './actions';

const { height, width } = Dimensions.get('screen');

class _Header extends Component {

  addTodo() {
    if(this.props.back) {
      this.props.dispatch(setTitle('Tracker'))
      this.props.navigator.pop();
      return;
    }
    this.props.navigator.push({ id: 'addItemScreen' })
  }

  render() {

    const AddIcon = (this.props.back) ? (
      <View>
        <View style={styles.backMiddle}></View>
        <View style={styles.backTop}></View>
        <View style={styles.backBottom}></View>
      </View>
    ):(
      <View>
        <View style={styles.circleSmall}></View>
        <View style={styles.circle}></View>
      </View>
    )


    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.addTodo.bind(this)} style={styles.options}>
          {AddIcon}
        </TouchableOpacity>
        <Text style={styles.title}>
          {this.props.title || 'Tracker'}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addModal: state.addModal,
    title: state.title,
  };
};

export default Header = connect(mapStateToProps, null)(_Header);

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#0277bd',
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: width,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  options: {
    height: 60,
    width: 60,
  },
  circleSmall: {
    height: 24,
    width: 2,
    backgroundColor: 'white',
    position: 'relative',
    top: 18,
    left: 29,
    
  },
  circle: {
    backgroundColor: 'white',
    position: 'absolute',
    height: 2,
    width: 24,
    top: 29,
    left: 18,

  },
  title: {
    marginLeft: 0,
    color: 'white',
    fontSize: 28,
    fontWeight: '400',
    letterSpacing: 30,
  },
  backMiddle: {
    width: 27,
    position: 'absolute',
    height: 2,
    backgroundColor: 'white',
    top: 29,
    left: 15,
  },
  backTop: {
    width: 15,
    height: 2,
    backgroundColor: 'white',
    top: 25,
    left: 13,
    transform: [{rotate: '-35deg'}],
    borderTopLeftRadius: 2,
  },
  backBottom: {
    width: 15,
    height: 2,
    borderBottomLeftRadius: 2,
    backgroundColor: 'white',
    top: 31,
    left: 13,
    transform: [{rotate: '35deg'}]
  }
});