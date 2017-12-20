export function addToFavorites(favoriteCard) {
  return {
    type: "ADD_TO_FAVORITES",
    favoriteCard
  }
}

export default function reducer(prevState = [], action) {
  switch(action.type) {
    case "ADD_TO_FAVORITES":
      return [...prevState, action.favoriteCard];
    default:
      return prevState;
  }
}
