import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import "./App.css";
import Main from "./container/Main";
const App = () => [<Main />]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
