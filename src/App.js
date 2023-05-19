import React,{useState} from "react";
import data from "./data";
import Tours from "./Components/Tours";

const App = () => {

  const [tours , setTours] = useState(data);

  function removeCard(id){
    const newTores = tours.filter(tour => tour.id !== id);
    setTours(newTores);
  }

  function removeAllCard(data){
    setTours(data);
  }

  if(tours.length === 0){
    return(
      <div>
        <h2>No Toure Left</h2>
        <button onClick={() => removeAllCard(data)} >Refresh</button>
      </div>
    );
  }


  return (
    <div className="w-[100vw] h-[100vw] m-[0 auto]">
        <Tours tours = {tours} removeCard = {removeCard}></Tours>
    </div>
  );
};

export default App;
