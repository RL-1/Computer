import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Course } from './components/Course/Course';
import { Header } from './components/Header/Header';
import { Work } from './components/Work/work';


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Course />
    <Work />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
