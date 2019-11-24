import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {Search} from './components/search/search.component'
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state={
      monsters:[],
      searchText:''
    };
    //If we have used the function defenition for handleChange
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=> resp.json())
    .then(users=>this.setState({monsters:users}));
  }

  //This is used using function defi. In this method, we need to do an extra step to bind the this keyword inside the constructor.
  // handleChange(e){
  //   this.setState({searchText:e.target.value});
  // }

  //Using Arrow function.
  handleChange = e=>{
    this.setState({searchText:e.target.value});
  }
  render(){
    const {monsters, searchText} = this.state;
    const filterMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    )

    return (     
      <div className="App">
       <Search placeholder="Search Monsters" handleChange={this.handleChange}
       ></Search>
        <CardList monsters={filterMonsters}></CardList>
      </div>
    );
  }
}

export default App;
