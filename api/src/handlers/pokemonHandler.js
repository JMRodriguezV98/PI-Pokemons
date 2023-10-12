const { getAllPokemon,getDetailPokemon,postPokemonController,getPokemonByName } = require("../controllers/pokemonController");

const getPokemonHandler = async ( req,res ) => {
    const { name } = req.query;
    try{
        if( name ){
            const searchPokemon = await getPokemonByName( name );
            if(searchPokemon.length){
                res.status( 200 ).json( searchPokemon ) 
            }else{
                throw new Error( `No se encontro pokemon con el nombre ${ name }` );
            }
        }else{
            const response = await getAllPokemon();
            res.status( 200 ).json( response );
        }
    }catch( error ) {
        res.status( 404 ).json( { error: error.message } );
    }
}

const getPokemonByIdHandler = async ( req,res ) => {
    const { idPokemon } = req.params;
    const tipoId = isNaN( idPokemon ) ? "bd" : "api";
    try {
        const response = await getDetailPokemon( idPokemon,tipoId );
        res.status( 200 ).json( response );
    } catch (error) {
        res.status( 404 ).json( { error: error.message } );
    }
}

const postPokemonHandler = async ( req,res ) => {
    const { name,imagen,vida,ataque,defensa,velocidad,altura,peso } = req.body;
    try {
        const response = await postPokemonController( name,imagen,vida,ataque,defensa,velocidad,altura,peso );
        res.status( 201 ).json( response );
    } catch (error) {
        res.status( 404 ).json( { error: error.message } );
    }
}

module.exports = {
    getPokemonHandler,
    getPokemonByIdHandler,
    postPokemonHandler,
}