import {combineReducers} from 'redux';
import score from './score';
import inputManager from './input-manager';

export default combineReducers({score, inputManager})