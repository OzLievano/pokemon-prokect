import React from 'react'
import img from '../pokemonbal.jpg';
import {Navbar,NavbarBrand,NavLink,NavItem} from 'reactstrap';
import NavigationHeader from './NavigationHeader'

const Navigation = () => {
    return (
        <div>
            <Navbar color="dark">
                <NavigationHeader> 
                    <NavLink to="/">PokeFinder</NavLink>
                </NavigationHeader> 
                    <img src={img} alt="pokemonball" style={{width:'10%'}}></img>
            </Navbar>
        </div>
    )
}

export default Navigation
