export default function reducer(prevState = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return prevState + 1;
        case "DECREMENT":
            return prevState - 1;
        default:
            return prevState;
    }
}

export function increment(){
  return {
    type: "INCREMENT"
  }
}

export function decrement(){
  return {
    type: "DECREMENT"
  }
}
