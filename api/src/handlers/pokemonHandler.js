const { getAllPokemonController,getDetailPokemonController,postPokemonController,getPokemonByNameController,getPokemonPrueba } = require("../controllers/pokemonController");

const getPokemonHandler = async ( req,res ) => {
    const { name } = req.query;
    try{
        if( name ){
            const uniformName = name.toLowerCase();
            const searchPokemon = await getPokemonByNameController( uniformName );
            if( searchPokemon.length ){
                res.status( 200 ).json( searchPokemon )
            }else{
                throw new Error( `No se encontro pokemon con el nombre ${ uniformName }` );
            }
        }else{
            const response = await getAllPokemonController();
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
        const response = await getDetailPokemonController( idPokemon,tipoId );
        res.status( 200 ).json( response );
    } catch (error) {
        res.status( 404 ).json( { error: error.message } );
    }
}

const postPokemonHandler = async ( req,res ) => {
    const { name,imagen,vida,ataque,defensa,velocidad,altura,peso,type } = req.body;
    try {
        const response = await postPokemonController( name,imagen,vida,ataque,defensa,velocidad,altura,peso,type );
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