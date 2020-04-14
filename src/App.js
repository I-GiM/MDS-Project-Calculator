import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App p-5">
      <div className="head">
        <img className="px-2" src="https://bit.ly/2JXXLL0" alt="calc icon"/>
        <p className="font-weight-bold px-2 mb-0">SIMPLE CALCULATOR</p>
      </div>

      <div className="calc-bg my-4 p-3 rounded">
        <div className="calc">
          <div className="result">
            
            <div className="res px-2 my-2">0</div>
            <div className="res px-2 my-2">0</div>
          </div>
          <div className="operate-bg rounded p-1">
            <div className="operate">
              
                <button className="btn btn">(</button>
                <button className="btn btn">)</button>
                <button className="btn ico"><img src="https://bit.ly/2xhdaUc" alt="back"/></button>
                <button className="btn mod">MOD</button>
                <button className="btn">%</button>
                <button className="btn">7</button>
                <button className="btn">8</button>
                <button className="btn">9</button>
                <button className="btn">+</button>
                <button className="btn bg-danger clear">C</button>
                <button className="btn">4</button>
                <button className="btn">5</button>
                <button className="btn">6</button>
                <button className="btn">-</button>
                <button className="btn equals">=</button>
                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>
                <button className="btn">X</button>
                <button className="btn ico"><img src="https://bit.ly/2yW1S85" alt=""/></button>
                <button className="btn">0</button>
                <button className="btn">.</button>
                <button className="btn ico"><img src="https://bit.ly/3b1EMLs" alt=""/></button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
