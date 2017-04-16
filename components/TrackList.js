import React, { Component } from 'react';
import {
  ListView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { setTitle, incrementCount, setInitialList, decrementCount } from './actions';

const { height, width } = Dimensions.get('screen')

class _TrackList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const set = ds.cloneWithRows(this.props.tracked);
    this.state = {
      dataSource: set,
      filter: '',
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('trackedItems').then((value) => {
          this.props.dispatch(setInitialList(JSON.parse(value)));
        }).done();
  }

  componentWillReceiveProps(props) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const set = ds.cloneWithRows(props.tracked.slice());
    this.setState({
      ...this.state,
      dataSource: set
    })
  }

  incrementTrackedCount(title) {
    this.props.dispatch(incrementCount(title, this.props.tracked));
  }

  decrementTrackedCount(title) {
    this.props.dispatch(decrementCount(title, this.props.tracked));
  }

  transitionToDetailedScreen(title) {
    this.props.dispatch(setTitle(title))
    this.props.navigator.push({ id: 'detailedScreen' })
  }

  handleList(rowData) {
    if(!rowData) {
      return (<View></View>)
    }
    return (
      <View style={styles.card}>
        <View style={styles.upDownContainer}>
          <TouchableOpacity style={[styles.button, styles.upButton]} onPress={this.incrementTrackedCount.bind(this, rowData.title)}>
          </TouchableOpacity>
          <Text style={{fontSize: 24}}>
            {rowData.count}
          </Text>
          <Text>
            Today
          </Text>
          <TouchableOpacity style={[styles.button, styles.downButton]} onPress={this.decrementTrackedCount.bind(this, rowData.title)}>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.container} onPress={this.transitionToDetailedScreen.bind(this, rowData.title)}>
          <Text style={styles.cardHeader}>
            {rowData.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  handleFilter(e) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const filtered = this.props.tracked.filter((item) => {
      return item.title.indexOf(e) !== -1;
    })
    this.setState({
      ...this.state,
      filter: e,
      dataSource: ds.cloneWithRows(filtered)
    })
  }

  render() {
    return (
      <View style={styles.trackContainer}>
        <TextInput placeholder='Filter Items' value={this.state.filter} onChangeText={this.handleFilter.bind(this)} style={styles.input} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.handleList.bind(this)}
          contentContainerStyle={styles.trackList}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trackContainer: {
    flex: 1,
    marginTop: 60,
  },
  card: {
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: 'lightblue',
    marginBottom: 2,
    width: (width),
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackList: {
    alignItems: 'center',
  },
  cardHeader: {
    paddingLeft: 10,
    fontSize: 18,
  },
  textInput: {
    width: (width * 0.7),
  },
  upDownContainer: {
    height: 120,
    width: 60,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  upButton: {
    height: 30,
    width: 30,
    backgroundColor: 'blue',
  },
  downButton: {
    height: 30,
    width: 30,
    backgroundColor: 'pink',
  }
})

const mapStateToProps = (store) => {
  return {
    tracked: store.tracked,
  };
};

export default TrackList = connect(mapStateToProps, null)(_TrackList);
