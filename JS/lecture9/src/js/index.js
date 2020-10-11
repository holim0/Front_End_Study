//forkify-api.herokuapp.com/api/search
// https: //forkify-api.herokuapp.com/api/search?&q=${query}

import Search from "./models/Search";
import ID from "./models/Recipe";
import * as searchView from "./views/searchViews";
import { elements, renderLoader, clearLoader } from "./views/base";
// global state of the app

const state = {};

const controlSearch = async () => {
    const query = searchView.getInput();
    if (query) {
        //state에서 search 객체 생성
        state.search = new Search(query);

        // search 객체의 getResult() 호출
        elements.searchInput.value = ""; // 인풋 clear
        searchView.clearResult(); // 결과 리스트 초기화
        renderLoader(elements.searchRes); // 로딩 이미지 받아오기

        try {
            await state.search.getResult(); //api 를 받아오기 때문에

            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (e) {
            alert(e);
            clearLoader();
        }
    } else {
    }
};

elements.searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // 리로딩 방지
    controlSearch(); // 검색 함수 call
});

elements.searchResPages.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-inline");
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResult();
        searchView.renderResults(state.search.result, goToPage);
    }
});

const controlRecipe = async () => {
    const id = window.location.hash.replace("#", "");

    if (id) {
        state.recipe = new ID(id);

        try {
            await state.recipe.getRecipe();

            state.recipe.calcTime();

            state.recipe.calcServings();

            console.log(state.recipe);
        } catch (e) {
            alert(e);
        }
    }
};

window.addEventListener("hashchange", controlRecipe);
window.addEventListener("load", controlRecipe);
