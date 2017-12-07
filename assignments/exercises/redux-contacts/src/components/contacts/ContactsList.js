import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllToDos} from '../../redux/contacts';

class ContactsList extends Component {
    componentDidMount() {
        this.props.getAllToDos();
    }
    render(){
    const contacts = this.props.contacts.map(
      (contact, i) => <li key={contact.name + i}>{contact.name}</li>)
    return(
      <ul>
          {contacts}
      </ul>
    )
  }
}
function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps, {getAllToDos})(ContactsList)
