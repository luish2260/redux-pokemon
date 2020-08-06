import React, { Component } from 'react'
import Tarjeta from '../Tarjeta/Tarjeta.jsx'

import './Tarjetas.css'

import { connect } from 'react-redux'

class Tarjetas extends Component {
  render() {
    /*acá usamos la prop del estado global de redux*/
    return (
      <div className="Tarjetas">
        {this.props.pokemons.map((pokemon, index) => {
          return <Tarjeta pokemon={pokemon} key={index} />
        })}
      </div>
    )
  }
}
//el mapStateToProps lo que hace es habilitar una parte del estado global
//para que este disponible en este componente como prop.
//constante mapStateToProps = (state) ={
//que retorna un objeto  {
//    prop: state.prop
//  }
//}
//state es un parametro, por lo que, podes ponerle cualquier valor, pero por convencion,
//es mejor utilizar state.
const mapStateToProps = state => {
  return { pokemons: state.pokemons }
}
//connect es una funcion que recibe dos parametros, el mapStateToProps y el mapDispatchToProps, que
//retorna una funcion que recibe un parametro, el componente que quieras exportar
//basicamente, hacemos connect(mapStateToProps, mapDispatchToProps)(Componente)
//Si necesitamos usar las props del estado global, utilizamos solo mapStateToProps
//si necesitamos usar solo las actions, usamos solo (null, mapDispatchToProps)
//si necesitamos usar ambos, usamos ambos
export default connect(mapStateToProps)(Tarjetas)
