import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './components/Redux/store'
/*Acá tenemos que importar Provider de react-redux y store de nuestro archivo Store
entonces, antes englobamos a toda la aplicacion con el provider y le pasamos como prop nuestro store
Esto va a hacer que la store este disponible globalmente para nuestros componentes, siempre y cuando esten
suscriptos. Lo cual lo vamos a ver en cada archivo en particular.
Segui este orden:
Nav --> action ---> reducer ---> Tarjetas
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
