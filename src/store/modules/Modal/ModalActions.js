const showModal = ({id}) => {
  return dispatch => {
    dispatch({
      type: 'MODAL__SET_ID',
      payload: id,
    });
  };
};

const hideModal = () => {
  return dispatch => {
    dispatch({
      type: 'MODAL__SET_ID',
      payload: '',
    });
  };
};

export const ModalActions = {
  showModal,
  hideModal,
};
