import React, { Component } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

import { addPokemon } from './Redux/actions/pokemonsActions'
import { connect } from 'react-redux'
//Este componente nav lo que hace es despachar una accion de redux
//primero creamos el componente.
class Nav extends Component {
  //el constructor es necesario en este caso porque tiene un estado local, el cual es busqueda.
  //el estado local no esta relacionado con redux,  es algo propio de react. El estado global y el estado
  //local no son excluyentes entre si.
  //para eso importamos addPokemon, que es un action creator, para eso la desestructuramos ya que esta exportada
  //en el archivo correspondiente.
  //necesitamos connect de react-redux, el cual vamos a exportar abajo.
  constructor(props) {
    super(props)
    this.state = {
      busqueda: '',
    }
  }
  render() {
    return (
      <nav className="Nav">
        <NavLink exact to="/" activeClassName="active">
          Inicio
        </NavLink>
        <NavLink exact to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink exact to="/login" activeClassName="active">
          Login
        </NavLink>
        {/*Las props del componente, ahora las recibe de redux, entonces tiene el metodo addPokemon, que es
        el action que importamos arriba. Entonces. this.props.addPokemon(value) 
        En este caso  le pasamos el valor del estado local porque estamos manejando la busqueda con el estado
        pero podria ser de otra forma y funcionaria, no es necesario pasarle el estado como value de la  funcion*/}
        <form
          onSubmit={e => {
            e.preventDefault()
            this.props.addPokemon(this.state.busqueda)
          }}
        >
          <input
            id="input"
            type="text"
            placeholder="Pokemon..."
            value={this.state.busqueda}
            onChange={e => this.setState({ busqueda: e.target.value })}
          />
          <input type="submit" value="Agregar" />
        </form>
      </nav>
    )
  }
}
//aca es cuando la cosa se vuelve rara.
//lo que hace esto es lo siguiente
//dispatch es un nombre arbitrario, en realidad es una funcion y ese es el parametro
//mapDispatchToProps= (dispatch) => {
//  que retorna un objeto! {
//  action: (parametro1)=> {
//      que retorna el dispatch(action(parametro1))
//    }
//  }
//}
//esta es la forma dificil, si tenés que modificar las actions por algun motivo, usa esa forma,
//sino tenes una opcion mas facil

//const mapDispatchToProps ={
//  addPokemon,
//}

//lo unico que haces es hacer un objeto con tus acciones
//cualquiera de los dos es valido y funciona de la misma manera.
//es recomendado solamente pasarle un objeto si tenes mas de una accion
//en redux, ya que la anterior es para soluciones más complejas
const mapDispatchToProps = dispatch => {
  return {
    addPokemon: pokemon => {
      dispatch(addPokemon(pokemon))
    },
  }
}
//ahora,lo que falta es exportar nuestro connect(que importamos de la libreria react-redux)
//connect es una funcion que recibe dos parametros. el primero es el mapStateToProps y el segundo
//el mapDispatchToProps. El primero  lo que hace es habilitar las props del store de redux que hayas definido
//y el segundo habilitarte las accions que hayas definido en mapDispatchToProps
//en este caso, nosotros solo necesitamos los dispatch, entonces el primer parametro es null
//no podemos pasarle el dispatch como primer parametro porque sino va a pensar que es un estado.
//Connect es una funcion, que retorna una funcion a la que  le pasamos el componente que queremos exportar
export default connect(null, mapDispatchToProps)(Nav)
