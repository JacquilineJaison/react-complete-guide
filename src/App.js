import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ name: 'Jack', age: 31 },
    { name: 'Dany', age: 12 },
    { name: 'Joy', age: 3 }
    ]
  };

  switchNameHandler = () => {
    this.setState({persons:[
      { name: 'Jacquiline', age: 31 },
    { name: 'Dany', age: 12 },
    { name: 'Joy', age: 39 }
    ]
  })
  };

  render() {
    return (
      <div className="App">
        <h1 >I am a React App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
