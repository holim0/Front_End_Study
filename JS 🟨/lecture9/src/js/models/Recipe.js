import axios from "axios";

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        const url = "https://forkify-api.herokuapp.com/api/get";
        try {
            const result = await axios.get(url, {
                params: {
                    rId: this.id,
                },
            });
            this.title = result.data.recipe.title;
            this.author = result.data.recipe.publisher;
            this.img = result.data.recipe.image_url;
            this.url = result.data.recipe.source_url;
            this.ingredients = result.data.recipe.ingredients;
        } catch (e) {
            alert(e);
        }
    }

    calcTime() {
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.serving = 4;
    }
}
