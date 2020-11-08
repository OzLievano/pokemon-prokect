import React from 'react'
import img from '../pokemonbal.jpg';
import {Navbar,NavLink} from 'reactstrap';
import NavigationHeader from './NavigationHeader'

const Navigation = () => {
    return (
        <div>
            <Navbar color="dark">
                    <NavLink href="/">
                        <NavigationHeader> PokeFinder </NavigationHeader>
                    </NavLink> 
                    <img src={img} alt="pokemonball" style={{width:'10%'}}></img>
            </Navbar>
        </div>
    )
}

export default Navigation
