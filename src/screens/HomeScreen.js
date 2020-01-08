import * as React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {ModalActions} from '../store/modules/Modal/ModalActions';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: '',
    };
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Open Success Modal"
          onPress={() => {
            this.props.showModal({id: 'Success'});
          }}
        />
        <Button
          title="Open Error Modal"
          onPress={() => {
            this.props.showModal({
              id: 'Error',
              modalProps: {errorMessage: this.state.errorMessage},
            });
          }}
        />
        <TextInput
          style={{width: 200, height: 30, borderWidth: 1}}
          onChangeText={text => {
            this.setState({
              errorMessage: text,
            });
          }}
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

const mapDispatchToProps = {
  showModal: ModalActions.showModal,
};

const ConnectedDetailsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);

export default ConnectedDetailsScreen;
