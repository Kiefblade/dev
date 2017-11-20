import React, {Component} from 'react';
import List from './List';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            word: "",
        }
        this.newArr = []
        this.updateInput = this.updateInput.bind(this)
        this.postNewWord = this.postNewWord.bind(this)
    }

    updateInput(event) {
        this.setState({word: event.target.value})
    }

    postNewWord(){
        this.newArr.push(this.state.word);
    }

    render(){
        return (
            <div>
                <input onChange={this.updateInput} value={this.state.word}/>
                <button onClick={this.postNewWord}>submit</button>
                <h1>{this.state.word}</h1>
                <ul>
                  <List array={this.newArr} />
                </ul>
            </div>
        )
    }
}

export default Input;
