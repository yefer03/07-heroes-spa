
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import { HeroresApp } from './HeroresApp';
import './styles.css';



ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <React.StrictMode>
      <HeroresApp /> 
    </React.StrictMode>,
  </BrowserRouter>
  
);  
