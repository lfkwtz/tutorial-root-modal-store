import * as React from 'react';
import {Modal, Button, View} from 'react-native';
import {connect} from 'react-redux';

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
          <View />
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
