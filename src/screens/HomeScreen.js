import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {connect} from 'react-redux';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
  };
};

const ConnectedDetailsScreen = connect(mapStateToProps)(HomeScreen);

export default ConnectedDetailsScreen;
