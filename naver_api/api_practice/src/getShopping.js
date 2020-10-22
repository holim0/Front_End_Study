import React, { Component } from "react";
import axios from "axios";
import SearchItem from "./searchItem";
import "./getShopping.css";

class GetShopping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            search: "",
        };
    }

    saveQuery = (e) => {
        this.setState({ search: e.target.value });
    };

    getItems = async () => {
        const ID = "GFmXV5peCO2IuIYLzayH";
        const SECRET_KEY = "Hqx_4drbOu";
        const q = this.state.search;
        try {
            if (q === "") {
                this.setState({ items: [], search: "" });
            } else {
                const {
                    data: { items },
                } = await axios.get("/v1/search/shop.json", {
                    params: {
                        query: q,
                        display: 20,
                    },
                    headers: {
                        "X-Naver-Client-Id": ID,
                        "X-Naver-Client-Secret": SECRET_KEY,
                    },
                });

                this.setState({ items: items });
                console.log(items);
            }
        } catch (error) {
            console.log(error);
        }
    };

    handleInput = (e) => {
        if (e.key === "Enter") {
            this.getItems();
        }
    };

    render() {
        const { getItems, handleInput, saveQuery } = this;
        const { items, search } = this.state;
        return (
            <div>
                <div className="head">
                    <h1 className="title">전자제품을 검색해주세요 💻</h1>
                    <div className="search">
                        <input
                            className="searchBar"
                            type="text"
                            value={search}
                            onChange={saveQuery}
                            onKeyPress={handleInput}
                            placeholder="제품명"
                        ></input>
                        <button className="btn" onClick={getItems}>
                            검색
                        </button>
                    </div>
                </div>

                <section className="info">
                    {items.map((item) => (
                        <SearchItem
                            className="info2"
                            key={item.productId}
                            name={item.title}
                            category={item.category2}
                            image={item.image}
                            brand={item.brand}
                        />
                    ))}
                </section>
            </div>
        );
    }
}

export default GetShopping;
