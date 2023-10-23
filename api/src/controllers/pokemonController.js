const axios = require('axios');
const { Pokemon,Type } = require('../db');
const { Op } = require('sequelize');
const { extractInfoToURLPokemon, findStatsToPokemonApi } = require( '../utils/index' );

const API = 'https://pokeapi.co/api/v2/pokemon';

const getAllPokemonController = async () => {
    //traer los datos de los pokemons, desde el api y la base de datos
    const pokemonAPI = await extractInfoToURLPokemon( API );
    const pokemonDB = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: [ "name" ],
            through: { attributes: [] }
        }
    });
    
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

const getPokemonByNameController = async ( namePokemon ) => {
    //filtrar en la base de datos
    const pokemonByNameDB = await Pokemon.findAll({
        where: {
            name: {
                [ Op.like ]: `%${ namePokemon }%`,
            },
            include: {
                model: Type,
                attributes: [ "name" ],
                through: { attributes: [] }
            }
        }
    })

    if( pokemonByNameDB.length == 0){
        const pokeAPI = await axios( `${ API }/${ namePokemon }` );
        const { id,name,height,weight,sprites,stats,types } = await pokeAPI.data;

        const hp = findStatsToPokemonApi( 'hp',stats );
        const attack = findStatsToPokemonApi( 'attack',stats );
        const defense = findStatsToPokemonApi( 'defense',stats );
        const speed = findStatsToPokemonApi( 'speed',stats );
        const image = sprites.other.dream_world.front_default;
        const type = types.map( type => {
            return type.type.name;
        })

        const pokemonFound = [{
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
        }]

        return [ ...pokemonFound ]
    }

    return [ ...pokemonByNameDB ]
}

const postPokemonController = async ( name,imagen,vida,ataque,defensa,velocidad,altura,peso,type ) => {
    const newPokemon = await Pokemon.create({
        name,
        imagen,
        vida,
        ataque,
        defensa,
        velocidad,
        altura,
        peso
    })

    type.forEach( async ( type ) => {
        const typesDB = await Type.findOne({
            where: { name: type }
        })
        await newPokemon.addType( typesDB );
    })

    return newPokemon;
}

module.exports = {
    getAllPokemonController,
    getDetailPokemonController,
    postPokemonController,
    getPokemonByNameController,
}