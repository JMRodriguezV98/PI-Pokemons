const { Router } = require('express');
const { getPokemonHandler,getPokemonByIdHandler,postPokemonHandler } = require('../handlers/pokemonHandler');

const pokemonsRouter = Router();

pokemonsRouter.get( '/',getPokemonHandler );
pokemonsRouter.get( '/:idPokemon', getPokemonByIdHandler );
pokemonsRouter.post( '/',postPokemonHandler );

module.exports = pokemonsRouter;