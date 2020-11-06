import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";

const Container = styled.div`
    margin-left: 30px;
    margin-bottom: 20px;
`;

const Img = styled.div`
    background-image: url(${(props) => props.bgUrl});
    height: 300px;
    width: 200px;
    background-size: cover;
    background-position: center center;
    border-radius: 5px;
    margin-bottom: 5px;
    transition: opacity 0.5s ease-in-out;
`;
const Rating = styled.span`
    position: absolute;
    bottom: 5px;
    right: 5px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    font-size: 20px;
`;
const ImgContainer = styled.div`
    position: relative;
    margin-bottom: 5px;
    &:hover {
        ${Img} {
            opacity: 0.3;
        }

        ${Rating} {
            opacity: 0.7;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 5px;
`;

const Year = styled.span`
    color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => {
    return (
        <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
            <Container>
                <ImgContainer>
                    <Img
                        bgUrl={
                            imgUrl
                                ? `https://image.tmdb.org/t/p/w300${imgUrl}`
                                : require("../assets/noimg.png")
                        }
                    ></Img>
                    <Rating>⭐️{rating}/10</Rating>
                </ImgContainer>
                <Title>
                    {title.length > 15 ? `${title.substring(0, 15)}...` : title}
                </Title>
                <Year>{year}</Year>
            </Container>
        </Link>
    );
};

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool,
};

export default Poster;
