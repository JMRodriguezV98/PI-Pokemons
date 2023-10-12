const axios = require("axios");

const typesAPI = 'https://pokeapi.co/api/v2/type';

const getTypesController = async () => {
    const typesResponse = await axios( typesAPI );
    const cleanTypes = await typesResponse.data.results;
    return cleanTypes;
}

module.exports = getTypesController