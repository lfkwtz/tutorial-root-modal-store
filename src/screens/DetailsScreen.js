import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {connect} from 'react-redux';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
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

const ConnectedDetailsScreen = connect(mapStateToProps)(DetailsScreen);

export default ConnectedDetailsScreen;
