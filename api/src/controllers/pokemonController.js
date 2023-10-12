const axios = require('axios');
const { Pokemon } = require('../db');
const { Op } = require('sequelize');

const API = 'https://pokeapi.co/api/v2/pokemon';

const getAllPokemon = async () => {
    const infoApi = await axios.get( API );
    const cleanInfo = await infoApi.data.results;
    const pokemonDB = await Pokemon.findAll();
    return [ ...pokemonDB,...cleanInfo ];
}

const getDetailPokemon = async ( idPokemon,tipoId ) => {
    if( tipoId === 'api' ){
        const pokemonById = await axios( `${API}/${idPokemon}` );
        const pokemonByIdClean = await pokemonById.data;
        return pokemonByIdClean;
    }

    return await Pokemon.findByPk( idPokemon );
}

const getPokemonByName = async ( name ) => {
    const pokemonData = await axios( API );
    const cleanInfo = await pokemonData.data.results;
    const nameUniform = name.toLowerCase();
    const pokemonFilter = cleanInfo.filter( pokemon => pokemon.name === nameUniform );
    const pokemonByNameDB = await Pokemon.findAll({
        where: {
            name: {
                [ Op.like ]: `%${ nameUniform }%`,
            }
        }
    })

    return [ ...pokemonByNameDB,...pokemonFilter ]
}

const postPokemonController = async ( name,imagen,vida,ataque,defensa,velocidad,altura,peso ) => {
    return await Pokemon.create({
        name,
        imagen,
        vida,
        ataque,
        defensa,
        velocidad,
        altura,
        peso
    })
}

module.exports = {
    getAllPokemon,
    getDetailPokemon,
    postPokemonController,
    getPokemonByName
}