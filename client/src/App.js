import './css/App.css';
import React, { useEffect } from 'react';
import DisplayTodos from './component/DisplayTodos';
import img from './images/im1.jpg';
import { GlobalProvider } from './context/GlobalState';


function App() {

    const M = window.M; 
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {});
          });


  return (
    <GlobalProvider>
    <div className="container">
        <div className="row">
          <div className="col s12">
            <h1 className="center header hide-on-small-only">"If you love life, don't waste time, for time is what life is made up of"</h1>
          </div></div>

          <div className="row">
            <div className="col m5 s12">
                <img src={img} alt="img" className="responsive-img im1" />
            </div>
            
            <div className="col m7 s12">
              <div className="center card pink lighten-2"><h2>To Do List</h2></div>
              <DisplayTodos></DisplayTodos>
            </div>
          </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
