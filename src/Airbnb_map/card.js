import React from "react";

function Card(/*img,star,rating,reviewcount,location,title,price,openspots,*/{item}){
     let badgeText;
     if(item.openspots===0)
     {
        badgeText='SOLD OUT';
     }
     else if(item.location==='online')
     {
        badgeText="ONLINE";
     }
        return(
        <>
    
            <section>


            
                        <div className="container">
                            {badgeText && <div className="card_badge">{badgeText}</div>}
                            <img className="card_image" src ={item.img} alt=" "  />

                                <div className="card_rating">
                                        <img className="card_star" src={item.star}  alt=" "  />
                                        <span className="grey"> {item.rating}</span>
                                        <span className="grey"> {item.reviewcount}</span>
                                        <span>{item.location}</span>
                                </div>       
                            
                            <p>{item.title}</p>
                            <p><strong>From ${item.price}</strong>/person</p>
                            
                        </div>

            </section>
               
        </>
    )
};

export default Card;