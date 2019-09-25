import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: 'Harry', age: 25},
      {name: 'Styles', age: 26},
      {name: 'Max', age: 29}
    ],
    
    otherState: 'some other value',
    showPersons: false
  }
  

  switchNameHandler = (newName) => {
    // console.log('Was Clicked.!');
    this.setState ({
      persons : [
        {name: newName, age: 24},
        {name: 'Alan Walker', age: 26},
        {name: 'Max', age: 30}
      ] 
    } )
  }

  nameChangeHandler = (event) => {
      this.setState ({
        persons : [
        {name: 'Harry Styles', age: 24},
        {name: event.target.value, age: 26},
        {name: 'Max', age: 29}
      ] 
    } )
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {
    const style = {
      backgroundColor: '#333',
      color: '#fff',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <center><button style={style}
         onClick={this.togglePersonsHandler}> Switch Name </button></center>

        {
          this.state.showPersons === true ? 
          <div>
            <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}>
            </Person>
            <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, 'Anne Marie')} changed= {this.nameChangeHandler}>I Love Taylor Swift Songs.
            </Person>
            <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age}>
            </Person>
          </div> : null
        }

      </div>
    );

    // return React.createElement('div',{className:'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

render(<App />, document.getElementById('root'));
