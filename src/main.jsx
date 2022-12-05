import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import * as ReactDOMServer from 'react-dom/server';
import './index.css'
import {ThemeContextProvider} from './components/ThemeContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ThemeContextProvider>
 <App/>
  </ThemeContextProvider>
)