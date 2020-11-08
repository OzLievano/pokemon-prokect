import React, {useState} from 'react'
import Fuse from 'fuse.js';
import PokemonList from './PokemonList';

const PokemonSearch = (props) => {
    console.log(props)

    const [myQuery,setMyQuery]=useState("")

    const options = {
        isCaseSenstivive:false,
        includeMatches:true,
        findAllMatches:true,
        keys:[
            "name"
        ]
    } 

    function handleOnSearch({currentTarget = {} }){
        const {value} = currentTarget;
        setMyQuery(value);
    }

    const fuse = new Fuse(props.list,options)
    const results = fuse.search(myQuery)

    const pokeResults = myQuery ? results.map(result => result.item) : props.list

    return (
        <div>
            <form className="search">
                <label>Search</label>
                <input type="text" value={myQuery} onChange={handleOnSearch}/>
            </form>

            <PokemonList list ={pokeResults}/>
        </div>
    )
}

export default PokemonSearch
