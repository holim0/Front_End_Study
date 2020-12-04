// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

const fetchUser = async () => {
    return axios.get(url);
};

const startApp = async () => {
    try {
        const res = await fetchUser();

        res.user = res.data;
        console.log(user);
        username.innerText = user.name;
        email.innerText = user.email;
        address.innerText = user.address.city;
    } catch (e) {
        console.log(e);
    }
};

startApp();
