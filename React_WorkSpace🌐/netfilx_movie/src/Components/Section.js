import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";

const Container = styled.div`
    margin-top: 50px;
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 25px;
`;

const Grid = styled.div`
    display: flex;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    width: 100%;
    padding: 20px 0px;
`;

const Ani = styled.div`
    display: flex;
`;
const clamp = (value, clampAt = 30) => {
    if (value > 0) {
        return value > clampAt ? clampAt : value;
    } else {
        return value < -clampAt ? -clampAt : value;
    }
};

const Section = ({ title, children }) => {
    const [style, set] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)",
    }));

    const bind = useScroll((event) => {
        set({
            transform: `perspective(500px) rotateY(${
                event.scrolling ? clamp(event.delta[0]) : 0
            }deg)`,
        });
    });

    return (
        <Container>
            <Title>{title}</Title>
            <Grid {...bind()}>
                {children &&
                    children.length > 0 &&
                    Object.keys(children).map((idx) => {
                        return (
                            <Ani
                                as={animated.div}
                                style={{ ...style }}
                                key={idx}
                            >
                                {children[idx]}
                            </Ani>
                        );
                    })}
            </Grid>
        </Container>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Section;
