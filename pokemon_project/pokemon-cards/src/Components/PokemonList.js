import React from 'react'
import PokemonCard from './PokemonCard'
import {Container,Card, Row,Col} from 'reactstrap'

const PokemonList = (props) => {
    console.log(props.list)
    return (
        <div>
            {props.list.map((item,index)=>{
                return (
                    <Container>
                        <Row xs="4">
                            <Col>
                                <Card>
                                    <PokemonCard key={index} pokemon={item}/>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    )
            })}
            
        </div>
    )
}

export default PokemonList
