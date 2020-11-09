import React from 'react';
import {Card, CardHeader,CardImg} from 'reactstrap';

const PokemonCard = (props) => {
    console.log(props)
    return (
        <div>
           <Card>
            <CardHeader>
                {props.pokemon.name}
            </CardHeader>
           </Card>
        </div>
    )
}

export default PokemonCard
