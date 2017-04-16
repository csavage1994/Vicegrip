import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './Header';
import TrackList from './TrackList';

class _Tracker extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.props.dispatch(actions.test(this.props.test));
    // }, 1000);
  }

  render() {

    const { navigator } = this.props;

    return (
      <View style={{flex: 1}}>
        <Header navigator={navigator} />
        <TrackList navigator={navigator} />
      </View>
    )
  }
}

const mapStateToProps = (store) => {
  return store;
};

export default Tracker = connect(mapStateToProps, null)(_Tracker);