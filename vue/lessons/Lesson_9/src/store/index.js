import { createStore } from 'vuex'
import { categories } from './data'

export default createStore({
    state: {
        categoriesList: [],
        currentProductsList: [],
    },

    getters: {
        categoriesList: ({ categoriesList }) => categoriesList,
        getCategoryById: (state) => {
            return (categoryId) => {
                return state.categoriesList.find((category) => category.id == categoryId)
            }
        },
    },

    mutations: {
        loadCategoriesList(state, list) {
            state.categoriesList = list
        },
    },

    actions: {
        loadCategoriesList({ commit }) {
            commit('loadCategoriesList', categories)
        },
    },

    modules: {},
})
