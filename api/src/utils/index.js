const axios = require( 'axios' );

//Funcion para limpiar la informacion que llega desde el API
const cleanInfoApi = async ( url ) => {
    const infoApi = await axios( url );
    const cleanInfo = await infoApi.data.results
    return cleanInfo;
}

// funcion para extraer la informacion que se encuentra dentro de la propiedad url cuando se hace el get al api
const extractInfoToURLPokemon = async ( url ) => {
    const dataPokemon = await cleanInfoApi( url );
    const pokemonsData = [];

    //recorro cada pokemon que me respondio el api para hacer el proceso de solicitar los datos
    for( const pokemon of dataPokemon ){
        const pokemonUrlData = await axios( pokemon.url );
        const { id,name,height,weight,sprites,stats,types } = pokemonUrlData.data;
        
        const hp = findStatsToPokemonApi( 'hp',stats );
        const attack = findStatsToPokemonApi( 'attack',stats );
        const defense = findStatsToPokemonApi( 'defense',stats );
        const speed = findStatsToPokemonApi( 'speed',stats );
        const image = sprites.other.dream_world.front_default;
        const type = types.map( type => {
            return type.type.name;
        })
 
        pokemonsData.push( {
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
        } );
    }

    return pokemonsData;

}

//funcion para hacer la busqueda de cada dato de stats
const findStatsToPokemonApi = ( statFind,property ) => {
    const findStat = property.find( stat => stat.stat.name == statFind );
    const foundStat = findStat.base_stat;
    return foundStat;
}

module.exports = {
    cleanInfoApi,
    extractInfoToURLPokemon,
    findStatsToPokemonApi,
}