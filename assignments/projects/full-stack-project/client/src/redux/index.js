import {combineReducers} from 'redux';
import cards from './cards';
import favoriteCards from './favorites';
import deckPost from './postdeck'

export default combineReducers({
    cards,
    favoriteCards,
    deckPost
});
