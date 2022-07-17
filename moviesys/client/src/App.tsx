import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { GetRoutes } from './routes';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <GetRoutes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
