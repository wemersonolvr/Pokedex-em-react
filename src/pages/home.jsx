import { Container } from "@mui/system";
import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar'
import CharacterCard from '../components/Card';
import { Box, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Home = ({ setPokemonData }) => {
    const[Pokemons, setPokemons] = useState([]);
    const navigate = useNavigate()

    useEffect(() =>{
        getPokemons()
    }, [])

    const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i <= 151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };
    const pokemonFiltering = (name) => {
        var filteredPokemons = [];
        if(name === ""){
            getPokemons();
        }
        for (var i in Pokemons){
            if(Pokemons[i].data.name.includes(name)){
            filteredPokemons.push(Pokemons[i]);
        }
    }
    setPokemons(filteredPokemons);
}


    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData)
        navigate("/profile")
    }




    return(
        <div>
            <Navbar pokemonFiltering = {pokemonFiltering}/>
            <Container maxWidth="false">
                <Grid container spacing = {3}>
                    {Pokemons.map((pokemon, key) => 
                    <Grid item xs = {2} key = {key}>
                        <Box onClick={()=>pokemonPickHandler(pokemon.data)}>
                        <CharacterCard name = {pokemon.data.name} image={pokemon.data.sprites.front_default}/> 
                        </Box>
                    </Grid>)}
                </Grid>

            </Container >
        </div>


    )
}
