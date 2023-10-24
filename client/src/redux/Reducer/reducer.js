//Importar las actions-types

import { FILTER_TYPE, GET_POKEMONS, GET_TYPES, ORDER, RESET } from "../Actions/action-types";

//Inicializar el initialState

let initialState = {
    allPokemons: [],
    allTypes: [],
    allPokemonsBackup: [],
    pokemonFiltered: [],
    pokemonOrden: [],
    filter: false,
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
                allPokemons: action.payload,
                allPokemonsBackup: action.payload
            }

        case FILTER_TYPE:
            const filterByType =  [ ...state.allPokemonsBackup ].filter( ( pokemon ) => pokemon.types.includes( action.payload ) );
            return {
                ...state,
                allPokemons: filterByType,
                pokemonFiltered: filterByType,
                filter: true
            }

        case RESET:
            return{
                ...state,
                filter: false,
                allPokemons: state.allPokemonsBackup
            }

        case ORDER:
            let filterByOrder = [ ...state.allPokemonsBackup ];
            if( action.payload === 'AZ' ){
                filterByOrder = filterByOrder.sort( ( a,b ) => {
                    return a.name.localeCompare( b.name );
                })
            }

            if( action.payload === 'ZA' ){
                filterByOrder = filterByOrder.sort( ( a,b ) => {
                    return b.name.localeCompare( a.name );
                })
            }

            return{
                ...state,
                allPokemons: filterByOrder,
                pokemonOrden: filterByOrder,
            }
    
        default: return state
    }
}

export default rootReducer;