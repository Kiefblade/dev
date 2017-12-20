import {combineReducers} from 'redux';
import cards from './cards';
import favoriteCards from "./favorites";

export default combineReducers({
    cards,
    favoriteCards
});
