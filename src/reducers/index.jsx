import {combineReducers} from 'redux';
import score from './score';
import bestScore from './best-score';
import addition from './addition';
import inputManager from './input-manager';

export default combineReducers({score, bestScore, addition, inputManager})