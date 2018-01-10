import axios from "axios";

/* AUTH ACTIONS */
let defaultUser = {}

if(localStorage.token){
  defaultUser = {
    username: "",
    password: "",
    inventory: [],
    isAuthenticated: false
  }
} else {
  defaultUser = {
    username: "",
    password: "",
    inventory: [],
    isAuthenticated: false
  }
}



// export function getUser(user) {
//   return (dispatch) => {
//     axios.get(`main/${user.username}`).then((response) => {
//       dispatch({
//         type: "GET_USER",
//         user
//       })
//     })
//   }
// }

export function getShop(item){
  return (dispatch) => {
    axios.put("/shop", item).then(response => {
      dispatch({
        type: "GET_SHOP",
        item: response.data
      })
    })
  }
}

export function signup(user) {
  return (dispatch) => {
    axios.post("main/signup", user).then((response) => {
      dispatch({
        type: "SIGN_UP",
        player: response.data
      })
    }).catch(err => {
      console.error(err);
    })
  }
}

export function login(user) {
  return (dispatch) => {
    console.log("user: ", user);
    axios.post("main/login", user).then((response) => {
      localStorage.setItem("token", response.data.token);
      axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${response.data.token}`;
        return config;
      })
      dispatch({
        type: "LOGON",
        player: response.data.player
      })
    })
  }
}

export function logout() {
  localStorage.removeItem("token");
  return {
    type: "LOGOUT"
  }
}

export default function reducer(prevState = defaultUser, action) {
  switch(action.type) {
    case "SIGN_UP":
      return action.player;
    case "LOGON":
      return action.player;
    case "GET_SHOP":
      return action.item;
    case "LOGOUT":
      return prevState;
    default:
      return prevState;
  }
}
