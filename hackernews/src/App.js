import React, { Component } from 'react';
import './App.css';
import TodoItem from "./todo_components/Todoitem.js"
import ContactCard from "./contact_components/contactcard"
class App extends Component {

  render() {
    return (
      <div>
        <ContactCard>
          name = "Sasindu"
          phnnum = "011"
          email = "jskjkj"
        </ContactCard>
      </div>
    );
  }
}


export default App;


