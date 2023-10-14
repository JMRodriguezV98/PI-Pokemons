const axios = require( 'axios' );
const { Type } = require( '../db' );
const { cleanInfoApi } = require('../utils');

const typesAPI = 'https://pokeapi.co/api/v2/type';

const getTypesController = async () => {
    const typesDB = await Type.findAll();

    if( !typesDB.length ){
        const typesResponse = await cleanInfoApi( typesAPI );
        const typesPokemonsAPI = [];
        typesResponse.forEach( type => {
            typesPokemonsAPI.push( type.name );
        })
        typesPokemonsAPI.forEach( async( name ) => {
            await Type.findOrCreate( {
                where: { name }
            })
        })
        return typesPokemonsAPI;
    }

    return typesDB.map( types => types.name );
}

module.exports = getTypesController;