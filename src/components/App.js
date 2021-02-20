
import { useState } from 'react';
import '../App.css';
import BusinessContainer from './BusinessContainer';
import SearchForm from './SearchForm';

function App() {
  const [lotResults, setLotResults] = useState([])

  return (
    <div className="App">
      <h1>Welcome to AirGarage Lite</h1>
      <h1>Search here for the lowest rated parking lots</h1>
      
      <SearchForm 
        setLotResults={setLotResults}
      />
      <BusinessContainer 
        lotResults={lotResults}
      />
    </div>
  );
}

export default App;
