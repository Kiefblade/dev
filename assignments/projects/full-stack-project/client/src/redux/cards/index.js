import axios from 'axios';

export function addCards(cards, search){
  return (dispatch) => {
    axios.get("http://api.magicthegathering.io/v1/cards?set=XLN&colors=" + search).then(response => {
      console.log(response.data.cards);
      dispatch({type: "GET_SET_COLOR", cards: response.data.cards})
    }).catch(err => {
      console.log(err);
    })
  }
}

export default function reducer(prevState = [], action) {
  switch(action.type) {
    case "GET_SET_COLOR":
      return [...action.cards];
    default:
      return prevState;
  }
}
