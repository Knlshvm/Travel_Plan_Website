import React from "react";

function Cards(props){

    
    const[readMore , setReadMore] = React.useState(false)
    const description = readMore ? props.info :`${props.info.substring(0,200)}...`

    function readMoreHandler(){
        setReadMore(!readMore)
    }
    
    return(
        <div className="Card">

            <img src={props.image}  className="Card--img"/>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour--price"> ₹ {props.price}</h4>
                    <h4 className="tour--name">{props.name}</h4>
                </div>
                <div className="tour-des">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                    {readMore ? 'Read less' : 'Read More'}
                    </span>
                </div>
            </div>
            <button className="btn--red" onClick={()=> props.removeTour(props.id)}>
                Not interested
            </button>
       
        </div>
    )
}

export default Cards;