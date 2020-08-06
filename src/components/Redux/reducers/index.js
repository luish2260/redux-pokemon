import { ADD_POKEMON } from '../actions/pokemonsActions.js'

const initialState = {
  pokemons: [], // un pokemon es un objeto {id: 134, name: "Ditto", abilities:[]}
  pokemon_detail: {},
}
/*El reducer recibe dos parametros, un estado inicial(el estado con el que vos querés que se inicie
  la aplicacion, y una accion. Entonces nosotros hacemos un switch, la accion que nosotros 
  estamos usando es addPokemon, entonces, dentro de accion vas a tener:
  action.type: ADD_POKEMON(el string con el que vamos a comparar)
  action.payload: el pokemon que trajimos de la API
  Entonces acá aplicamos lo que queremos hacer con esa informacion y retornamos un estado nuevo
  En este caso, queremos quedarnos con todo lo que tenia el estado anteriormente y agregarle un pokemon nuevo
  entonces retornamos un objeto que tiene adentro el nuevo estado {
        pokemons: [...state.pokemons, action.payload],
      }
    Recordemos que usando componentes del tipo Clases en react, los estados solo pueden ser objetos */
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return {
        pokemons: [...state.pokemons, action.payload],
      }
    default:
      return {
        ...state,
      }
  }
}
