import React, { Component } from "react";
import "./searchItem.css";
import styled from "styled-components";
import Star from "./Star";

const Inside = styled.h4`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
`;

const Inside2 = styled.div`
    margin-top: 7px;
`;

function SearchItem({ name, category, image, brand }) {
    name = name.replaceAll("<b>", "");
    name = name.replaceAll("</b>", "");
    console.log(name);
    return (
        <div className="seperContainer">
            <img className="poster" src={image} alt={name} title={name}></img>
            <Inside>
                <Inside2>제조사: {brand}</Inside2>
                <Inside2>제품명: {name}</Inside2>
                <Inside2>분류: {category}</Inside2>
            </Inside>
            <Star />
        </div>
    );
}

export default SearchItem;
