import { program } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Course } from './components/Course/Course';
import { Footer } from './components/Footer/footer';
import { Header } from './components/Header/Header';
import { Job } from './components/Job/job';
import { Partnerts } from './components/Partnerts/partnerts';
import { Programs } from './components/Program/Program';
import { Start } from './components/Start/Start';
import { Teacher } from './components/Teacher/teacher';
import { Work } from './components/Work/work';


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Course />
    <Work />
    <Start />
    <Job />
    <Partnerts />
    <Programs />
    <Teacher />
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
