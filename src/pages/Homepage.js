import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Alert } from 'react-bootstrap';
import '../App.css';

// Components
import Pokemon from '../components/Pokemon';
import Loader from '../components/Loader';
import useInfiniteScroll from '../hooks/UseInfiniteScroll';
const Homepage = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true)
    const [counter,setCounter] = useState(1)
    const [loadingMore, setLoadingMore] = useState(false)
    
    //FOr infinite Scroll
    const [isFetching, setIsFetching] = useInfiniteScroll(getPokemonListAgain);
 

    var i =1;
    var pokemonArray = [];
    const getPokemonList = async () => {
        for( let k = 1 ; k <= 10; k ++){
            pokemonArray.push(await getPokemonData(i));
            i++
        }
        setCounter(i) // value geting refreshed everytime it gets out of function. so storing in state
        setPokemon(pokemonArray);
        setLoading(false);
    }
    // value of i and pokemonArrey gets vanished outside the function. so need to call it from state again
    //FOr infinite Scroll
    i=counter; // assigning in state
    async function getPokemonListAgain() {
        setLoadingMore(true)
        for(let j = 1 ; j <= 5; j ++){
            pokemonArray = pokemon;
            pokemonArray.push(await getPokemonData(i));
            i++
        }
        setCounter(i)
        setPokemon(pokemonArray);
        //setLoading(false);
        setIsFetching(false);
        setLoadingMore(false)
    }

    const getPokemonData = async (id) => {
        //const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await axios.get(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/${id}`
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
        ) : ( <>
            <Row xl={5} lg={4} md={3} sm={2} xs={1}  >
                {pokemon.map( p =>(
                    <Col key={p.data.name} >
                        <Pokemon pokemon={p.data}/>
                    </Col>
                ))}
            </Row>
            <Row className="justify-content-md-center" >
                {loadingMore  && <Alert  variant="primary">
                    Loading more... 
                    </Alert>}
            </Row>
            </>
        )}
        </>
    )
}

export default Homepage