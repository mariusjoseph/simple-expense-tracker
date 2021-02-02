import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App';
import AppUserContext from './context/AppUserContext';

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <AppUserContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppUserContext>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
