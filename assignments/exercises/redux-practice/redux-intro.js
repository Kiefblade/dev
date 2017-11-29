const redux = require('redux');

//Actions: Objects that are a set of instructions, every action needs a type property.
//EXAMPLE :  {
//              type: "INCREMENT"
//           }

//prevState is undefined initially, you can set a variable to avoid this, and set prevState equal to it in the function perameters.
const initialState = 0;

// Reducers Job: Takes an action and updates the state.
function reducer(prevState = initialState, action){
  switch(action.type){
    case "INCREMENT":
      return prevState + 1;
    case "DECREMENT":
      return prevState - 1;
    case "INCREASE_BY":
      return prevState + action.num;
    case "DECREASE_BY":
      return prevState - action.num;
    default:
      return prevState;
  }
}

const store = redux.createStore(reducer);

store.subscribe(function(){
  const currentState = store.getState();
  console.log(currentState);
})

//Action creators: return an action object.
function increment(){
  return {
    type: "INCREMENT"
  }
}

function decrement(){
  return {
    type: "DECREMENT"
  }
}
function increaseByX(num){
  return {
    type: "INCREASE_BY",
    num
  }
}
function decreaseByX(num){
  return {
    type: "DECREASE_BY",
    num
  }
}


store.dispatch(decreaseByX(20));
