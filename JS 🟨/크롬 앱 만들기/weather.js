const COORDS = "coords";
const API_KEY = "df19b5418880efdcdb43437a312a7917";
const weather = document.querySelector(".js-weather");

// function getWeather(lat, lng) {
//     fetch(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
//     )
//         .then((respon) => {
//             return respon.json(); //json 형태로 응답을 파싱한다.
//         })
//         .then((respon) => {
//             const temp = respon.main.temp;
//             const place = respon.name;
//             weather.innerText = `${temp} at ${place}`;
//         });
// }

async function getWeather(lat, lng) {
    try {
        const result = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        );

        const json = await result.json();

        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp} at ${place}`;
    } catch {
        alert("Error!");
    }
}

function handleGeoSuces(pos) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const coordObj = {
        latitude,
        longitude,
    };

    localStorage.setItem(COORDS, JSON.stringify(coordObj)); // localstorage에 저장.
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuces, handleGeoError);
}
function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);

    if (loadedCords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();
