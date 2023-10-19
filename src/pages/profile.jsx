import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Container, Paper, Typography } from '@mui/material';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
};

const imageStyle = {
    width: '50%',
    borderRadius: '50%',
};

const typeStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
};

const typeTextStyle = {
    backgroundColor: 'lightblue',
    padding: '5px 10px',
    borderRadius: '5px',
    fontWeight: 'bold',
};

const statStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
};

const statTextStyle = {
    backgroundColor: 'lightgreen',
    padding: '5px 10px',
    borderRadius: '5px',
    fontWeight: 'bold',
};

export const Profile = ({ pokemonData }) => {
    console.log(pokemonData);
    const { name, sprites, types, stats } = pokemonData || {};

    return (
        <>
            <Navbar hideSearch />
            <Container maxWidth="md">
                <Paper elevation={3}>
                    <Box style={containerStyle}>
                        <Typography variant="h4">{name}</Typography>
                        <img src={sprites.front_default} alt={name} style={imageStyle} />
                        <Typography variant="h6">Tipos:</Typography>
                        <div style={typeStyle}>
                            {types &&
                                types.map((type, index) => (
                                    <Typography
                                        key={index}
                                        variant="subtitle1"
                                        style={typeTextStyle}
                                    >
                                        {type.type.name}
                                    </Typography>
                                ))}
                        </div>
                        <Typography variant="h6">Status:</Typography>
                        <div style={statStyle}>
                            {stats &&
                                stats.map((stat, index) => (
                                    <Typography
                                        key={index}
                                        variant="subtitle1"
                                        style={statTextStyle}
                                    >
                                        {stat.stat.name}: {stat.base_stat}
                                    </Typography>
                                ))}
                        </div>
                    </Box>
                </Paper>
            </Container>
        </>
    );
};
