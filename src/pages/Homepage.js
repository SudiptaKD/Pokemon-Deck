import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import '../App.css';

// Components
import Pokemon from '../components/Pokemon';
import Loader from '../components/Loader';

const Homepage = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true)

    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i = 1; i <= 30; i ++){
            pokemonArray.push(await getPokemonData(i));
        }
        setPokemon(pokemonArray);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`
        // , {
        //     headers: {"Access-Control-Allow-Origin": "*",
        //     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        //     'Content-Type': 'application/jsonp'}
        // }
        );
        return res;
    }

    useEffect(() => {
        getPokemonList();
    }, [])

    return (
        <>
        {loading ? (
            <Loader />
        ) : (
            <Row xl={5} lg={4} md={3} sm={2} xs={1}  >
                {pokemon.map( p =>(
                    <Col key={p.data.name} >
                        <Pokemon pokemon={p.data}/>
                    </Col>
                ))}
            </Row>
        )}
        </>
    )
}

export default Homepage