import React from 'react'
import img from '../pokemonbal.jpg';
import {Navbar,NavbarBrand,NavLink,NavItem} from 'reactstrap';
import NavigationHeader from './NavigationHeader'

const Navigation = () => {
    return (
        <div>
            <Navbar color="dark">
                <NavbarBrand href="/">
                   <NavigationHeader>
                       PokeFinder 
                    </NavigationHeader>
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Navigation
