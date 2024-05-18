import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
import App from './App.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </React.StrictMode>
);

