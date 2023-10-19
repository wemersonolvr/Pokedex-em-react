import { Container } from "@mui/system";
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CharacterCard from '../components/Card';
import { Grid, Button } from "@mui/material";
import axios from "axios";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 24;

  useEffect(() => {
    getPokemons();
  }, [currentPage]);

  const getPokemons = () => {
    const endpoints = [];
    const start = (currentPage - 1) * pokemonsPerPage + 1;
    const end = currentPage * pokemonsPerPage;
  
    for (let i = start; i <= end; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
  
    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((responses) => {
        const newPokemons = responses.map((response) => response.data);
        setPokemons(newPokemons);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pokemonFiltering = (name) => {
    if (name === "") {
      getPokemons();
    } else {
      // Filtrar Pokémons com base no nome
      const filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(name.toLowerCase());
      });
      setPokemons(filteredPokemons);
    }
  };

  return (
    <div>
      <Navbar pokemonFiltering={pokemonFiltering} />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={2} key={key}>
              <CharacterCard name={pokemon.name} image={pokemon.sprites.front_default} />
            </Grid>
          ))}
        </Grid>
        <div>
          <Button onClick={handlePrevPage} disabled={currentPage === 1}>
            Anterior
          </Button>
          <Button onClick={handleNextPage}>Próximo</Button>
        </div>
      </Container>
    </div>
  );
};