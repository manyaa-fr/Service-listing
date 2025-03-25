import React from 'react';
import './App.css';
import ServiceCard from '../components/ServiceCard';

function App() {

  return (
    <div>
      <h1>Our Services</h1>
      <ServiceCard
      service= "Web Design"
      description= "We provide Modern Designs for websites!!"
      />
      <ServiceCard 
      service= "Product Design"
      description= "Design your products with latest trends!!"
      />
    </div>
  )
}

export default App;
