//forkify-api.herokuapp.com/api/search
// https: //forkify-api.herokuapp.com/api/search?&q=${query}

import Search from "./models/Search";

const state = {};

const search = new Search("pizza");

search.getResult();
