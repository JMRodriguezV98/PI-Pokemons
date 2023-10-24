//Importar las actions-types

import { GET_POKEMONS, GET_TYPES } from "../Actions/action-types";

//Inicializar el initialState

let initialState = {
    allPokemons: [],
    allTypes: []
};

//Definir el rootReducer
const rootReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_TYPES:
            return {
                ...state,
                allTypes: action.payload
            }

        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload
            }

        break;
    
        default: return state
            break;
    }
}

export default rootReducer;