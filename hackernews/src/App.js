import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'Sasiya',
    url: 'https://facebook.github.io/react/',
    author: 'AAAAAA',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }
  ,
  {
    title: 'sasindu',
    url: 'https://facebook.github.io/react/',
    author: 'BBBBB',
    num_comments: 3,
    points: 4,
    objectID: 1,
  },
  {
    title: 'sasiya',
    url: 'https://facebook.github.io/react/',
    author: 'CCCCCCCCCCC',
    num_comments: 3,
    points: 4,
    objectID: 2,
  },
];
const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());


const name = 'sasi';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      name,
      searchTerm: ''
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.isSearched = this.isSearched.bind(this);
  }


  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.isSearched}
        >Search
        </Search>
        <Table
          list={list}

          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }

  onDismiss(id) {

    const newlist = this.state.list.filter(item => id !== item.objectID);//when filtering the relevant object take as item
    console.log(newlist);
    this.setState({ list: newlist, name: 'Newone' });
  }

  isSearched(event) {

    this.setState({ searchTerm: event.target.value });
    // alert(this.state.changeWord);
  }

}
export default App;



class Search extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <form>
        {children}<input
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
    );
  }
}

class Table extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
  </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}