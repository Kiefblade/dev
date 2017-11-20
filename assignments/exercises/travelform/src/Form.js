import React, {Component} from 'react';


class Form extends Component{
  constructor(){
    super()
    this.state = {
        firstName: "",
        lastName: "",
        age: "",
        options: [],
        flightpath: "",
        gender: ""
      }
      this.handleInput = this.handleInput.bind(this);
      this.submitForm = this.submitForm.bind(this);
    }

handleInput(e){
  this.setState({[e.target.name]: e.target.value});
  const options = this.state.options;
    let index;

    if(e.target.type === "checkbox" && e.target.checked) {
      options.push(e.target.value);
    } else if(e.target.type === "checkbox" && !e.target.checked) {
      index = options.indexOf(e.target.value);
      options.splice(index, 1);
    }
    this.setState({options: options});
}
submitForm(e){
  e.preventDefault()
  alert(`First Name: ${this.state.firstName}\nLast Name: ${this.state.lastName}\nAge: ${this.state.age}\nGender: ${this.state.gender}\nFood Options: ${this.state.options}\nFlight Location: ${this.state.flightpath}`)
}

  render(){
    return(
      <div>
        <form>
        <input onChange={this.handleInput} name='firstName' placeholder="First Name"/>
        <input onChange={this.handleInput} name='lastName' placeholder="Last Name"/>
        <input onChange={this.handleInput} name='age' type="number" placeholder="Age"/>
        <label>Male</label>
        <input onChange={this.handleInput} type ='radio' name='gender' value="male"/>
        <label>Female</label>
        <input onChange={this.handleInput} type ='radio' name='gender' value="female"/>
        <select onChange={this.handleInput} name="flightpath">
          <option>Choose your flight:</option>
          <option value='Nowhere'>Nowhere</option>
          <option value='Somewhere'>Somewhere</option>
          <option value='Anywhere'>Anywhere</option>
        </select>
        <label>Vegetarian</label>
        <input onChange={this.handleInput} type='checkbox' name='options' value="Vegetarian "/>
        <label>Kosher</label>
        <input onChange={this.handleInput} type='checkbox' name='options' value="Kosher "/>
        <label>Lactose-Intolerant</label>
        <input onChange={this.handleInput} type='checkbox' name='options' value="Lactose-Free "/>
        <button onClick={this.submitForm}>Book Trip</button>
        </form>
      </div>
    )
  }
}

export default Form;
