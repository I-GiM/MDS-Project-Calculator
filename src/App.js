import React from 'react';
import './styles/styles.css'; 
import Calculator from './layout/Calculator/calculator';


const app = () => (
  <div className="app">
    <div className="head">
      <img className="px-2" src="https://bit.ly/2JXXLL0" alt="calc icon"/>
      <p className="font-weight-bold px-2 mb-0">SIMPLE CALCULATOR</p>
    </div>    
    <Calculator />
  </div>
);



export default app;

