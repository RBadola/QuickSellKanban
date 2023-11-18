import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataStates from './Components/Context/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataStates>
    <App />
    </DataStates>
  </React.StrictMode>
);

