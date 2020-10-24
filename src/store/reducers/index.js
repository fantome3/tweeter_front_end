import { combineReducers } from 'redux';
import authentication from './reducer.auth';
import message from './reducer.message';

export default combineReducers({
  authentication,
  message,
});