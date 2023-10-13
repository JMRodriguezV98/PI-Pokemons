const axios = require('axios');
const { Pokemon } = require('../db');
const { Op } = require('sequelize');
const { extractInfoToURLPokemon, findStatsToPokemonApi } = require( '../utils/index' );

const API = 'https://pokeapi.co/api/v2/pokemon';

const getAllPokemonController = async () => {
    //traer los datos de los pokemons, desde el api y la base de datos
    const pokemonAPI = await extractInfoToURLPokemon( API );
    const pokemonDB = await Pokemon.findAll();
    
    return [ ...pokemonDB,...pokemonAPI ];
}

const getDetailPokemonController = async ( idPokemon,tipoId ) => {
    //Verificar si el tipo de dato es api o db
    if( tipoId === 'api' ){
        const pokemonById = await axios( `${API}/${idPokemon}` );
        const { id,name,height,weight,sprites,stats,types } = await pokemonById.data;

        const hp = findStatsToPokemonApi( 'hp',stats );
        const attack = findStatsToPokemonApi( 'attack',stats );
        const defense = findStatsToPokemonApi( 'defense',stats );
        const speed = findStatsToPokemonApi( 'speed',stats );
        const image = sprites.other.dream_world.front_default;
        const type = types.map( type => {
            return type.type.name;
        })

        const pokemonFound = {
            id,
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            types: type,
        }

        return pokemonFound;
    }

    return await Pokemon.findByPk( idPokemon );
}

const getPokemonByNameController = async ( name ) => {
    //filtrar en el api
    const pokemonAPI = await extractInfoToURLPokemon( API );
    const nameUniform = name.toLowerCase();
    const pokemonFilter = pokemonAPI.filter( pokemon => pokemon.name === nameUniform );

    //filtrar en la base de datos
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
    getAllPokemonController,
    getDetailPokemonController,
    postPokemonController,
    getPokemonByNameController
}