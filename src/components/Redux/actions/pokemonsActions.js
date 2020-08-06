export const ADD_POKEMON = 'ADD_POKEMON'
export const REMOVE_POKEMON = 'REMOVE_POKEMON'
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL'
/*Una action puede recibir como parametro cualquier cosa que quieras, en este caso
el parametro es el estado que viene de la busqueda, el nombre del pokemon que buscamos
Entonces, lo que exportamos es una funcion que va a ser nuestro action.
Ese action  retorna otra funcion, la cual recibe un parametro que se llama dispatch(es una convencion,
  puede llamarse como vos quieras pero es preferible ponerle dispatch)
  la cual tiene que retornar una funcion con el nombre del parametro que le pusiste(en este caso dispatch)
  pasandole un objeto como parametro. Ese objeto va a ser lo que le envies al reducer
  el type es el tipo de accion que vas a usar, y el payload es lo que vos necesitas para hacerlo
  El action solo trae informacion de la  API y/o te dice el tipo de accion, no hace ninguna
  logica con esos datos. En caso de no necesitar traer algo de una API, solo despachas la accion
  y el payload puede ser algo que vos te traigas como parametro
  Ejemplo, 
  export function addName(name) {
  return function (dispatch) {
        dispatch({ type: ADD_POKEMON, payload: name })
      })
  }
}
Si nosotros solo quisieramos despachar el nombre de la accion
Ahora vamos al reducer!*/

export function addPokemon(name) {
  return function (dispatch) {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + name)
      .then(resultado => resultado.json())
      .then(pokemon => {
        dispatch({ type: ADD_POKEMON, payload: pokemon })
      })
  }
}
