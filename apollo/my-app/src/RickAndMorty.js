import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_EPISODE = gql`
    query Epspsode($ids: [ID!]!) {
        episodesByIds(ids: $ids) {
            name
            characters {
                name
                gender
                image
                status
            }
        }
    }
`;

const RickAndMorty = () => {
    const { loading, error, data } = useQuery(GET_EPISODE, {
        variables: { ids: [1, 2] },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!(</p>;
    return (
        <>
            <h2>RickAndMorty</h2>

            <div>
                {data.episodesByIds.map(({ name, characters }) => {
                    return (
                        <>
                            <h3>에피소드 이름: {name}</h3>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr 1fr",
                                }}
                            >
                                {characters.map(
                                    ({ name, gender, image, status }) => {
                                        return (
                                            <div>
                                                <img src={image} alt="hi"></img>
                                                <p>
                                                    이름: {name} 성별: {gender}
                                                </p>
                                                <p>생사여부: {status}</p>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default RickAndMorty;
