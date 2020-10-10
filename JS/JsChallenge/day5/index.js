// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const h2 = document.querySelector("h2");

function getTime() {
    // Don't delete this.
    const xmasDay = new Date("2020-12-24:00:00:00+0900");

    const nowDay = new Date();

    const diff = xmasDay - nowDay;

    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const diffMinute = Math.floor((diff / (1000 * 60)) % 60);
    const diffSecond = Math.floor((diff / 1000) % 60);

    h2.innerHTML = `${diffDay}d ${diffHour < 10 ? `0${diffHour}` : diffHour}h ${
        diffMinute < 10 ? `0${diffMinute}` : diffMinute
    }m ${diffSecond < 10 ? `0${diffSecond}` : diffSecond}s`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
