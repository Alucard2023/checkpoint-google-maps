import React from 'react';
import './App.css';
import GoogleMapComponent from './Component/Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Maps App</h1>
      </header>
      <main>
        <GoogleMapComponent />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
}

export default App;
