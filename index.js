import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from "state"
// import theme from "theme"
// import { ThemeProvider } from '@mui/material/styles';


// const store = configureStore({
//   reducer: { cart: cartReducer },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store= {store}>
      <ThemeProvider theme={theme}> */}
          <App />
{/*       
        </ThemeProvider>   
        </Provider> */}
  </React.StrictMode>
);


// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
