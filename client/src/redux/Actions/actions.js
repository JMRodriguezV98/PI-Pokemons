import axios from 'axios';
import { GET_TYPES,GET_POKEMONS } from './action-types';

export const getTypes = () => {
    return async function( dispatch ){
        try {
            const response = await axios('http://localhost:3001/types/');
            dispatch({
                type: GET_TYPES,
                payload: response.data
            })
        } catch (error) {
            
        }
    }
}

export const getPokemons = () => {
    return async function( dispatch ){
        try {
            const response = await axios('http://localhost:3001/pokemons/');
            console.log( response );
            dispatch({
                type: GET_POKEMONS,
                payload: response.data
            })
        } catch (error) {
            alert( error.response.data.error );
        }
    }
}

export const postPokemon = ( state ) => {
    return async function( dispatch ) {
        try {
            await axios.post('http://localhost:3001/pokemons/',state );
            alert( 'Pokemon creado con exito!' );
        } catch (error) {
            alert( error.response.data.error );
        }
    }
}