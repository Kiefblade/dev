// import axios from "axios";
//
// export function getShop(item){
//   return (dispatch) => {
//     axios.put("/shop", item).then(response => {
//       dispatch({
//         type: "GET_SHOP",
//         item: response.data.inventory
//       })
//     })
//   }
// }
//
// export default function reducer(prevState = [], action) {
//   switch(action.type){
//     case "GET_SHOP":
//       return action.item;
//     default:
//       return prevState;
//   }
// }
