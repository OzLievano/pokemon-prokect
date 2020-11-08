import './App.css';
import React from 'react'
import axios from 'axios'
import Navigation from './Components/Navigation'
import PokemonList from './Components/PokemonList'
import PokemonSearch from './Components/PokemonSearch';
 
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      pokemons:[]
    }
    
  }

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res=>{
      this.setState({
        pokemon:res.data.results
      })
    })
    .catch(err=>console.log('this is your error:',err))
  }

  render() { 
    return (  
    <div className="App">
      <Navigation />
      <PokemonSearch/>
      <PokemonList/>
    </div> 
  );
  }
}
 

export default App;
