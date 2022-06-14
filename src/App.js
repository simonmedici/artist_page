import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import './index.css'

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <div className='container'>
      <article>
        <h1>What is Lorem Ipsum? </h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
      </article>
     </div>
    </div>
  );
}

export default App;
