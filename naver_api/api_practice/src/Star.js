import React from "react";
import styled from "styled-components";

const StarBtn = styled.button`
    border: 0;
    background-color: #fff3e0;
    opacity: 0.5;
    height: 20px;
    width: 20px;
    font-size: 50px;
    margin-left: 35px;
    color: red;
    &:hover {
        opacity: 1;
    }
`;

function Star() {
    const arr = [" ⭐️ ", " ⭐️ ", " ⭐️ ", " ⭐️ ", " ⭐️ "];
    const list = arr.map((fire) => <StarBtn>{fire}</StarBtn>);
    return <span> {list}</span>;
}

export default Star;
