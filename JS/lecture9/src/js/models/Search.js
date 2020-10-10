import axios from "axios"; // 경로 입력 없이 그냥 패키지 이름만 써주면 된다.

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResult() {
        // promise return
        const url = "https://forkify-api.herokuapp.com/api/search";
        try {
            const res = await axios.get(url, {
                params: {
                    q: this.query,
                },
            });
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
