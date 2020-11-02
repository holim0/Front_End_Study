import React, { Component } from "react";
import "./searchItem.css";
function SearchItem({ name, category, image, brand }) {
    name = name.replaceAll("<b>", "");
    name = name.replaceAll("</b>", "");
    console.log(name);
    return (
        <div className="seperContainer">
            <img className="poster" src={image} alt={name} title={name}></img>
            <h4>
                브랜드: {brand}
                <br></br>
                제품명: {name}
                <br></br>
                분류: {category}
            </h4>
        </div>
    );
}

export default SearchItem;
