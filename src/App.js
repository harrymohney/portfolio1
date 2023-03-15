import './App.css';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './components/footer';
import Hero from './components/hero';
import Router from './components/router';



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
      <Router />
    </div>
  );
}

export default App;


