import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Componenet/Navigation';
import A from './Componenet/A';
import B from './Componenet/B';
import C from './Componenet/C';
import D from './Componenet/D';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
    <A/>
  // {/* </React.StrictMode> */}


  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<Navigation/>}>
  //      <Route index element={A}/>
  //      <Route path='/b' element={B}/>
  //      <Route path='/c' element={C}/>
  //      <Route path='/d' element={D}/>
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
