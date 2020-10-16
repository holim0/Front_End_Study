import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearResult = () => {
    elements.searchResList.innerHTML = "";
};

const renderRecipe = (recipe) => {
    const mk = `
        <li> 
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;

    elements.searchResList.insertAdjacentHTML("beforeend", mk);
};

const createBtn = (page, type) => {
    elements.searchResPages.innerHTML = "";

    return `<button class="btn-inline results__btn--${type}"  data-goto=${
        type === "prev" ? page - 1 : page + 1
    }>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${
            type === "prev" ? "left" : "right"
        }"></use>
    </svg>
    <span>Page ${type === "prev" ? page - 1 : page + 1}</span>
</button>`;
};

const renderBtn = (page, totalResult, pageResult) => {
    const pages = Math.ceil(totalResult / pageResult); // 페이지 개수 파악.

    let btn;
    if (page === 1 && pages > 1) {
        btn = createBtn(1, "next");
    } else if (page < pages) {
        btn = `${createBtn(page, "prev")}
        ${createBtn(page, "next")}`;
    } else if (page == pages) {
        btn = createBtn(page, "prev");
    }

    elements.searchResPages.insertAdjacentHTML("afterbegin", btn);
};

export const renderResults = (recipes, page = 1, pageResult = 10) => {
    const start = (page - 1) * pageResult;
    const end = page * pageResult;

    recipes.slice(start, end).forEach(renderRecipe);

    renderBtn(page, recipes.length, pageResult);
};
