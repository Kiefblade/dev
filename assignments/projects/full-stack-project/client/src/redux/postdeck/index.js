import axios from 'axios';

export function postCards(favoriteCards, name) {
  console.log(favoriteCards, "favorites");
  return (dispatch) => {
    axios.post("/main", {name, deck: favoriteCards}).then(response => {
      dispatch({type: "POST_USER_DECK", fullDeck: response.data})
    }).catch(err => {
      console.log(err);
    })
  }
}

export function getDeck(decks) {
  return (dispatch) => {
    axios.get("/main").then(response => {
      dispatch({type: "GET_USER_DECK", decks: response.data })
    }).catch(err => {
      console.log(err);
    })
  }
}

export default function reducer(prevState = [], action) {
  switch(action.type) {
    case "POST_USER_DECK":
      return action.fullDeck;
    case "GET_USER_DECK":
      return action.decks;
  default:
      return prevState;
  }
}
