import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { Home }  from "../pages/home";
import  { Profile }  from "../pages/profile";

export const Router = () => {
    const [pokemonData, setPokemonData] = useState()
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home setPokemonData={setPokemonData}/>} />
            <Route path="/profile" element={<Profile pokemonData={pokemonData} />} />;
        </Routes>
        </BrowserRouter>
    )
}