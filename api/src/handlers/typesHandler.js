const getTypesController = require("../controllers/typesControllers");


const getTypesHandler = async ( req,res ) => {
    try {
        const response = await getTypesController();
        res.status( 200 ).send( response );
    } catch (error) {
        res.status( 404 ).json( { error: error.message } )
    }
}

module.exports = getTypesHandler;