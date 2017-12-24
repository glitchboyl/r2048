import {combineReducers} from 'redux';
import score from './score';
import bestScore from './best-score';
import addition from './addition';
import gameOver from './game-over';
import gameWon from './game-won';
import keepPlayingGame from './keep-playing-game';
import inputManager from './input-manager';

export default combineReducers({
    score,
    bestScore,
    addition,
    over: gameOver,
    won: gameWon,
    keepPlaying: keepPlayingGame,
    inputManager
})