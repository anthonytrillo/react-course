import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './CounterApp'
// import App from './App.jsx'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <CounterApp value={ 0 }/>
  </React.StrictMode>,
)
