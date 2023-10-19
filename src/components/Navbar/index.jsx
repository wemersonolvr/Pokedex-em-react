import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar({pokemonFiltering, hideSearch}) {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2em"}}>
      <AppBar position="static" sx = {{ backgroundColor: "#CC0000"}}>
        <Toolbar>
            <Box component = "img"  src="/assets/POKETOP.png" height= "5em" sx={{ cursor: "pointer"}} onClick={() => navigate("/")}/>
            {hideSearch? null : (          
              <Search onChange = {(e) => pokemonFiltering(e.target.value)}>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Pesquisar…"
                inputProps={{ 'aria-label': 'search' }}
              />
              </Search>)
               }
               {hideSearch? null : ( 
               <h1>⠀⠀⠀⠀⠀-------- Pokémons da Primera Geração --------</h1>
               )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
