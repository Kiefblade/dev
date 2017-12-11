let endpoint = "http://localhost:8080/monkeys"

let query = {
  color: "black",
  species: "howler"
}

function stringifyUrl(endpoint, query){
  return `${endpoint}?color=${query.color}&species=${query.species}`;
}

console.log(stringifyUrl(endpoint, query));

// http://localhost:8080/monkeys?color=black&species=howler
//

// let endpoint = "http://localhost:8080/monkeys?color=black&species=howler"
//
// const unStringify = endpoint => {
//   return endpoint
// }
//
// console.log(unStringify(endpoint));
