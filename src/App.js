import React from 'react';
//import logo from './logo.svg';
import './App.css';
import mypic1 from './58835.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from 'react-helmet';

function App() {
  const myName = 'top';
  return (
    <div className="container">
       <Helmet>
                <style>{'body { background-color: white; }'}</style>
       </Helmet>
      <hr width = "10%" size = "1000%"></hr>
      <font  className="App-link" size = "10%"> <p>ชื่อของผม : {myName}</p></font>
       <img src={mypic1} width = "70%" size = "70%" alt = "aom"/>
    </div>
  );
}


export default App;
