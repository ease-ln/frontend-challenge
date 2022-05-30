import { createStore } from 'vuex'

export default createStore({
    state: {
        images: []
    },
    mutations: {
        addImage: (state, url) => { state.images.push(url); },
        removeImage: (state, url) => { 
            let index = state.images.indexOf(url);
            if (index !== -1) {
                state.images.splice(index, 1);
            }
        }
    },
    getters: {
        allImages: function(state) { return state.images }
    }
});