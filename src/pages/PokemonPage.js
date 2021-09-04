import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card, Row, Col, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css';

//Components 
import Loader from '../components/Loader'

const PokemonPage = ({match}) => {

    const id =match.params.id;
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [loading, setLoading] = useState(true)

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        setLoading(false)
    }   
    
    const getPokemonData = async (id) => {
        //const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const res = await axios.get(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/${id}`);
        return res;
    }
    useEffect (()=>{
        getPokemon(id)
    },[])


    return (
        <>
         {loading? (
             <Loader/>
         ):(<>
            <Row xs={1} lg={1}>
                <Card className='mt-2  rounded text-center shadow ' style={{height:'85px',padding:'0px'}}>
                <Card.Body className={`${pokemonDetails.types[0].type.name} rounded text-white`}>
                            <Link to={`/pokemon/${pokemonDetails.id}`} className="link-name">
                                
                                    <strong style={{fontSize:'35px'}}>
                                        {pokemonDetails.name.charAt(0).toUpperCase()+ pokemonDetails.name.slice(1)}
                                    </strong>
                                
                            </Link>
                        </Card.Body>
                </Card>
            </Row>
             <Row xs={1} sm={1} md={2} lg={2} xl={2}>
                 <Col  > 
                     <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white'
                        style={{border:'none', height:'505px'}}>
                        <Link to={`/pokemon/${pokemonDetails.id}`}>
                            <Card.Img style={{width:'14rem', height:'21rem'}} src= {pokemonDetails.sprites.other.dream_world.front_default}
                                varient="top" />
                        </Link>
                        <strong>Type</strong>
                            <Card.Body>
    
                                    <Row>
                                        {pokemonDetails.types.map(t => (
                                            <Col key={t.type.name}>
                                                <span className={`${t.type.name} rounded px-4 py-1`} style={{ color: 'white' }}>
                                                    {t.type.name.toUpperCase()}
                                                </span>
                                            </Col>
                                        ))}
                                    </Row>
                        
                            </Card.Body>
                    </Card>
                    <Card className='p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none', minHeight:'300px' }}>
                            <Card.Body>
                                
                                    <Row>
                                        <Col sm={6} xs={12}>
                                            <Card.Img style={{ width: '13rem' }} src={pokemonDetails.sprites.front_default}/>
                                            <Card.Text style={{fontSize:'17px'}}>Normal Form</Card.Text>
                                        </Col>
                                        <Col sm={6} xs={12}>
                                            <Card.Img style={{ width: '13rem' }} src={pokemonDetails.sprites.front_shiny}/>
                                            <Card.Text style={{fontSize:'17px'}}>Shiny Form</Card.Text>
                                        </Col>
                                    </Row>
        
                            </Card.Body>
                        </Card>
                </Col>
                <Col >
                        <Card className='p-3 my-3 rounded text-center shadow p-3 mb-5 bg-secondary' style={{ border: 'none', minHeight:'505px' }}>
                            <Card.Body>
                                <Card.Title style={{color:'#18469e',fontSize:"30px"}}>Stats</Card.Title>
                        
                                <strong>HP</strong> 
                                <ProgressBar  animated variant="success" label={`${pokemonDetails.stats[0].base_stat}%`}
                                    now={pokemonDetails.stats[0].base_stat} />
                                 <br/>
                                <strong>Attack</strong> 
                                <ProgressBar animated variant="info"  label={`${pokemonDetails.stats[1].base_stat}%`}
                                    now={pokemonDetails.stats[1].base_stat} /> 
                                <br/>
                                <strong>Defence</strong> 
                                <ProgressBar animated variant="warning" label={`${pokemonDetails.stats[2].base_stat}%`}
                                    now={pokemonDetails.stats[2].base_stat} /> 
                                <br/>
                                <strong>Special Attack</strong>
                                <ProgressBar animated variant="danger" label={`${pokemonDetails.stats[3].base_stat}%`} 
                                    now={pokemonDetails.stats[3].base_stat} /> 
                                <br/>
                                <strong>Special Defence</strong> 
                                <ProgressBar animated variant="success" label={`${pokemonDetails.stats[4].base_stat}%`}
                                    now={pokemonDetails.stats[4].base_stat} /> 
                                <br/>
                                <strong>Speed</strong> 
                                <ProgressBar animated variant="info" label={`${pokemonDetails.stats[5].base_stat}%`}
                                    now={pokemonDetails.stats[5].base_stat} /> 
                                <br/>
                        
                            </Card.Body>
                        </Card>
                        <Card className='p-3 my-3 rounded text-center shadow p-3 mb-5 bg-info' style={{ border: 'none', minHeight:'300px' }}>
                            <Card.Body>
                
                                    <Row >
                                        <Col xs={6} >
                                            <Row style={{paddingLeft:'50px'}}>
                                            <strong style={{color:'white'}}>Height </strong>
                                            </Row>
                                            <Row style={{paddingLeft:'60px'}}>
                                            <strong style={{fontSize:'20px'}}>{pokemonDetails.height}</strong>
                                            </Row>
                                        </Col>
                                        <Col xs={6}>
                                            <Row style={{paddingLeft:'50px'}}>
                                            <strong style={{color:'white'}}>Weight</strong>
                                            </Row>
                                            <Row style={{paddingLeft:'60px'}}>
                                            <strong style={{fontSize:'20px'}}>{pokemonDetails.weight} lbs</strong>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row className='text-center'>
                                        <Col xs={6}>
                                            <Row style={{paddingLeft:'50px'}}>
                                            <strong style={{color:'white'}}>Base Experience </strong>
                                            </Row>
                                            <Row style={{paddingLeft:'60px'}}>
                                            <strong style={{fontSize:'20px'}}>{pokemonDetails.base_experience}</strong>
                                            </Row>
                                        </Col>
                                        <Col xs={6}>
                                            <Row style={{paddingLeft:'50px'}}>
                                            <strong style={{color:'white'}}>Order </strong>
                                            </Row>
                                            <Row style={{paddingLeft:'60px'}}>
                                            <strong style={{fontSize:'20px'}}>{pokemonDetails.order}</strong>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row className="text-center">
                                        <Col>
                                            <Row style={{paddingLeft:'50px'}}>
                                            <strong style={{color:'white'}}>Abilities </strong>
                                            </Row>
                                            <Row style={{left:'10px'}}>
                                             {pokemonDetails.abilities.map(a => (
                                            <Col xs={12} sm={12} md={4} key={a.ability.name} >
                                                <strong>
                                                    {a.ability.name.toUpperCase()}
                                                </strong>
                                            </Col>
                                             ))}
                                            </Row>
                                        </Col>
                                    </Row>
                            </Card.Body>
                        </Card>
                </Col>
             </Row>
             </>
         )}
        </>
    )
}

export default PokemonPage
