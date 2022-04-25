import Home from './Components/Home/Home';
import MainHeader from './Components/NavBar/Mainheader';
import {useEffect, useState} from 'react';

const App=()=> {
  const [planData, setplanData]=useState([]);
  const plan=()=>{
    return fetch("https://demo3755793.mockable.io/plans")
          .then((response) => response.json())
          .then((data)=>setplanData(data))
      }; 
useEffect(() => {
    plan();
  }, []);
  return (
    <div>
      <MainHeader/>
      <Home data={planData}/>
    </div>
  );
}

export default App;
