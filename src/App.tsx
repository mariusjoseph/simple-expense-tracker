import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppGlobalContextProvider } from './Context/AppGlobalContext';


import './App.css';

const App:React.FC = () => {


  return (
    <AppGlobalContextProvider>
      <BrowserRouter>
      </BrowserRouter>
    </AppGlobalContextProvider>
  );
}

export default App;
