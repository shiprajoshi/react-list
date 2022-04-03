import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './Provider/index';
import  { UserDetails } from './Provider/UserLoginProvider';
ReactDOM.render(
  <React.StrictMode>
    <UserDetails.Provider value={{}}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserDetails.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
