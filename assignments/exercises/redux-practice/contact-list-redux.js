const redux = require('redux');
const store = redux.createStore(reducer);


store.subscribe(function(){
  const currentState = store.getState();
  console.log(currentState);
})

function addContact(name, phone, email){
  return {
    type: "ADD_CONTACTS",
    person: {
      name,
      phone,
      email
    }
  }
}

function removeContact(start){
  return {
    type: "REMOVE_CONTACTS",
    start
  }
}

function reducer(prevState = [], action){
  switch (action.type){
    case "ADD_CONTACTS":
      return [...prevState, action.person];
    case "REMOVE_CONTACTS":
      return prevState.splice(action.start);
    default:
      return prevState;
  }
}
store.dispatch(addContact("Luke", "No", "Never"));
store.dispatch(addContact("Andrew", "No", "Never"));
store.dispatch(addContact("Frank", "No", "Never"));
store.dispatch(removeContact(1));
store.dispatch(addContact("Jeremey", "Something", "I dunno"));
