import React, { Component } from 'react'
import './App.css'
import Tarjetas from './components/Tarjetas/Tarjetas.jsx'
import Nav from './components/Nav'

import { Route } from 'react-router-dom'
import TarjetaInfo from './components/TarjetaInfo/TarjetaInfo.jsx'
import About from './components/About/About.jsx'

import Login from './components/Login/Login.jsx'

/*
Para seguir el hilo de como esta estructurado el archivo.
Nav hace el dispatch al action, el action  le envia el tipo y el payload al reducer y el reducer
le envia el nuevo estado al componente Tarjetas.
En cada archivo correspondiente esta explicado como funciona.
Nav--> actions/pokemonActions --> reducers/index.js --> Tarjetas
Primero vamos a definir el store, en el archivo store.js
*/

class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <Route exact path="/" render={() => <Tarjetas />} />
        <Route
          exact
          path="/pokemon/:id"
          render={({ match }) => (
            <TarjetaInfo pokemon={this.state.pokemons.find(pokemon => pokemon.id === parseInt(match.params.id))} />
          )}
        />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/login" render={() => <Login />} />
      </div>
    )
  }
}

export default App
