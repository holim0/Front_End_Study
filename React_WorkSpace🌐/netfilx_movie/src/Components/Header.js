import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header2 = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rgba(20, 20, 20, 0.5);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Head = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const Item = styled.li`
    text-align: center;
    font-size: 20px;
    height: 50px;
    &:hover {
        color: #ffb300;
    }

    border-bottom: 5px solid
        ${(props) => (props.cur ? "#ffb300" : "transparent")};

    transition: border-bottom 0.3s ease-in-out;
`;

const Slist = styled(Link)`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: center;
`;

function Header({ location: { pathname } }) {
    return (
        <Header2>
            <Head>
                <Item cur={pathname === "/"}>
                    <Slist to="/">Movies</Slist>
                </Item>
                <Item cur={pathname === "/tv"}>
                    <Slist to="/tv">TV</Slist>
                </Item>
                <Item cur={pathname === "/search"}>
                    <Slist to="/search">Search</Slist>
                </Item>
            </Head>
        </Header2>
    );
}

export default withRouter(Header);
