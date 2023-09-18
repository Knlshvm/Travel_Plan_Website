import React, {useState} from "react";
import data from "./data"
import Tours from "./components/Tours"



function App(){

  const [tours,setTours] = useState(data)

  function intrestHandler(id){
    const newTour = tours.filter( tour => tour.id !== id );
    setTours(newTour);
  }
  
  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No tours left</h2>
        <button className= "btn-white" onClick={() => setTours(data)}>
          Referesh
        </button>
      </div>
    );
  }

  return(

      <div className="App">
        <Tours tours={tours} removeTour = {intrestHandler} ></Tours>
      </div>

  );
  
};

export default App;
