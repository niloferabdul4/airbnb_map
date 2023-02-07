import React from "react";
import  ReactDOM  from "react-dom";

import './card';
import Card from "./card";


import './nav';
import Navbar from "./nav";


export default function Airbnb(){
    const arr=[{id:1,img:"/images/image 12.png", star:"/images/Star 1.png", rating:5,  reviewcount:6,  location:"USA",  price:100, title:"Ronaldo",openspots:0},
                {id:2,img:"/images/mountain-bike 1.png", star:"/images/Star 1.png", rating:4.5, reviewcount:16, location:"India", price:300,title:"Anand",openspots:0},
                {id:3,img:"/images/wedding-photography 1.png",  star:"/images/Star 1.png", rating:4.5, reviewcount:10, location:"online", price:100, title:"Paul Nicolos", openspots:4},
                {id:4,img:"/images/image 12.png", star:"/images/Star 1.png", rating:5,  reviewcount:6,  location:"USA",  price:100, title:"Ronaldo",openspots:2},
                {id:5,img:"/images/mountain-bike 1.png", star:"/images/Star 1.png", rating:4.5, reviewcount:16, location:"online", price:300,title:"Anand",openspots:1},
                {id:6,img:"/images/wedding-photography 1.png",  star:"/images/Star 1.png", rating:4.5, reviewcount:10, location:"Russia", price:100, title:"Paul Nicolos",openspots:3}
               ];

const res=arr.map(n=>{return <Card 
                                key={n.id}  
                                item={n}  
                                /*                                                 
                                img={n.img}
                                star={n.star}
                                rating={n.rating}
                                reviewcount={n.reviewcount}
                                location={n.location}
                                title={n.title}
                                price={n.price}
                                openspots={n.openspots}
                            */
                                                                   
                                              
                                />
                    }
                 );


        return(
            <>
             <div className="main_container">
                <Navbar />
                {res}
            </div>
        </>
    )
}

ReactDOM.render(<Airbnb />,document.getElementById('root'));