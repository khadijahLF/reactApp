import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import pdt from './data';
import './index.css';


function App() {

  return (
    <>
    <div className="app-container">
      <Header />
      <div className="card-grid">
      {pdt.map((item) => ( 
        <Card 
          key={item.id} 
          title={item.title} 
          img={item.image} 
          desc={item.description} 
          price={item.price} 
        />)
)}
</div>
</div>
    </>
  )
}

export default App