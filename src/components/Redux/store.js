import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

/*Para crear el store tenés que importar el metodo createStore de redux
y le pasas dos parametros, los reducers y applyMiddleware
el segundo es opcional, el primero le  tenés que pasar un archivo que contenga todos
los reducers o le pasas los reducers combinados con un metodo llamado combineReducers
el middleware que estamos usando, thunk, lo que hace es permitirte enviar en el payload
archivos json que te hayas traido de alguna API, hay muchos middleware, podes usar muchos otros.
La idea del middleware es que se ejecuten cada vez que realizas un action para no repetir codigo.
Ahora, ese store lo exportamos y lo importamos en index.js, vamos a ese archivo.
*/
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
