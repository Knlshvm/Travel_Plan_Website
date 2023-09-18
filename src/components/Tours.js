import React from "react";
import Cards from "./Cards";

function Tours(props){
   
    return(
        <div className="container">
            <div>
                <h1 className="title">Plan with Kunal</h1>
            </div>
            <div className="cards">
                {props.tours.map( (tour) => {
                    return <Cards key={tour.id} { ...tour} removeTour={props.removeTour}></Cards>
                })}
            </div>
        </div>
    )
}

export default Tours;