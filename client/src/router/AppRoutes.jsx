import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'; 
import Landing from '../pages/ladingPage/Landing';
import Home from '../pages/home/Home';
import CreatePokemon from '../pages/CreatePokemon/CreatePokemon';
import Navbar from '../components/Navbar/Navbar';

const AppRoutes = () => {
  const { pathname } = useLocation();

  return (
    <>
    {
      pathname !== '/' && <Navbar />
    }
        <Routes>
            <Route path='/' element={ <Landing /> } />
            <Route path='/home' element={ <Home /> } />
            <Route path='/create' element={ <CreatePokemon /> } />
        </Routes>
    </>
  )
}

export default AppRoutes