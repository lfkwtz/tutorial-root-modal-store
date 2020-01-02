import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';

const ID_INITIAL_STATE = '';

export const id = createReducer(ID_INITIAL_STATE, {});

export const ModalReducer = combineReducers({
  id,
});
