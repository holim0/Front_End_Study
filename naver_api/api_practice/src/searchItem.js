import React, { Component } from "react";
import "./searchItem.css";
function SearchItem({ name, category, image, brand }) {
    return (
        <div className="seperContainer">
            <img className="poster" src={image} alt={name} title={name}></img>
            <h4>
                {brand} {name}
            </h4>
            <h4>{category}</h4>
        </div>
    );
}

export default SearchItem;
