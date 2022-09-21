import { defineStore } from 'pinia';

export const useStore = defineStore('pokemon', {
    state: () => {
        return {
            pokemon: [] as Response | any,
            error: '' as string | any,
        };
    },
    getters: {
        getPokemonData: (state) => state.pokemon,
    },
    actions: {
        /**
         * Fetching data
         */
        async fetchData() {
            try {
                const results = await fetch(
                    'https://gist.githubusercontent.com/s-en-o/1e8188fe995ae1292ab713ac750f7aaa/raw/d2778781dff2e0daced28de6caed0d11e17fc6b2/pokemon.json'
                )
                    .then((response) => response.json())
                    .then((data) => {
                        this.pokemon = data;
                    });

                console.log('fetching data:', results);
            } catch (error) {
                this.error = error;
                console.error(error);
            }
        },
    },
});
