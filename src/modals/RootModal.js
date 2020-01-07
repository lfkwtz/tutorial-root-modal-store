import * as React from 'react';
import {Modal, Button, View} from 'react-native';
import {connect} from 'react-redux';
import Error from './Error';
import Success from './Success';

const Modals = {
  Error: Error,
  Success: Success,
};

export class RootModal extends React.Component {
  render() {
    return (
      <Modal visible={true} animationType="fade" testID="modal">
        <View
          style={{
            flex: 1,
            padding: 20,
            justifyContent: 'space-between',
          }}>
          <Modals.Error />
          <Button onPress={() => {}} title="Close" color="blue" />
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.modal.id,
  };
};

export default connect(mapStateToProps)(RootModal);
