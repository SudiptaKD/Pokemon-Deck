import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css';


const Pokemon = ({pokemon}) => {
    return (
        <>
            <Card className='my-4 rounded text-center shadow mb-1' style={{border:'none', height:'270px'}}>
                
                <Card.Body className={`${pokemon.types[0].type.name} rounded text-white`}>
                <Link style={{height:'250px'}} to={`/pokemon/${pokemon.id}`} >
                    <Card.Img  style={{width:'8rem', height:'11rem'}} src={pokemon.sprites.other.dream_world.front_default} varient="top" />
                </Link>
                <br/>
                    <Link to={`/pokemon/${pokemon.id}`} className="link-name" >
                        <Card.Title as="div">
                            <strong>
                                {pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}
                            </strong>
                        </Card.Title>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Pokemon
