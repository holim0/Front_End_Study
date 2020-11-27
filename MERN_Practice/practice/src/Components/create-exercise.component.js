import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = () => {
    const [userData, setUserdata] = useState({
        username: "",
        des: "",
        duration: 0,
        date: new Date(),
        users: [],
    });

    const history = useHistory();
    const inputRef = useRef("userInput");
    const handleUsername = (e) => {
        const name = e.target.value;

        setUserdata({ ...userData, username: name });
    };
    const handleDes = (e) => {
        const Des = e.target.value;

        setUserdata({ ...userData, des: Des });
    };
    const handleDuration = (e) => {
        setUserdata({ ...userData, duration: e.target.value });
    };
    const handleDate = (date) => {
        setUserdata({ ...userData, date: date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: userData.username,
            des: userData.des,
            duration: userData.duration,
            date: userData.date,
        };

        console.log(exercise);

        history.push("/");
    };

    useEffect(() => {
        setUserdata({
            ...userData,
            username: "test user",
            users: ["test"],
        });
    }, []);

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select
                        ref={inputRef}
                        required
                        className="form-control"
                        value={userData.username}
                        onChange={handleUsername}
                    >
                        {userData.users.length > 0 &&
                            userData.users.map(function (user) {
                                return (
                                    <option key={user} value={user}>
                                        {user}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        value={userData.des}
                        onChange={handleDes}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={userData.duration}
                        onChange={handleDuration}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={userData.date}
                            onChange={handleDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        value="Create Exercise Log"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateExercise;
