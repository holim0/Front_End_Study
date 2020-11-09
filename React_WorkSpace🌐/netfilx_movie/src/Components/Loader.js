import React from "react";
import styled, { keyframes } from "styled-components";

const Movement = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(15px);
}`;

const Container = styled.div`
    height: 100vh;
    width: 100vh; 
    font-size: 50px;
    margin: 30px auto;
    color: #ffb300;
    text-align: center;
`;

const Word = styled.span`
    display: inline-block;
    margin: 0 1px;

    animation: ${Movement} 0.7s infinite;

    &:nth-child(2) {
        animation-delay: 0.1s;
    }
    &:nth-child(3) {
        animation-delay: 0.2s;
    }
    &:nth-child(4) {
        animation-delay: 0.3s;
    }
    &:nth-child(5) {
        animation-delay: 0.4s;
    }
    &:nth-child(6) {
        animation-delay: 0.5s;
    }
    &:nth-child(7) {
        animation-delay: 0.6s;
    }
`;

const Loader = () => (
    <Container>
        <Word>L</Word>
        <Word>O</Word>
        <Word>A</Word>
        <Word>D</Word>
        <Word>I</Word>
        <Word>N</Word>
        <Word>G</Word>
    </Container>
);

export default Loader;
