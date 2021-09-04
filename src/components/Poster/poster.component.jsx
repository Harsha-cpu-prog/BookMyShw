import React from "react";

const Poster =() => {
    return( <>
    <div>
        <div> 
            <img src={props.src} alt = {props.title} />
            </div>
            <h3
             className={`text-lg font-bold ${props.isDark ? "text-white":"text-gray-700"}`}>{props.title}</h3>
            <p>{props.subtitle}</p>
             </div> 
             </>
    );             
};
export default Poster;