import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './pages/Game';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;