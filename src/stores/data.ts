import { defineStore } from 'pinia';
export type pokemonItem =
    | {
          name: string;
          url: string | undefined;
      }
    | undefined;

export const useStore = defineStore('pokemon', {
    state: () => {
        return {
            pokemonList: null as Response | any,
            pokemonSelected: {} as pokemonItem,
            error: '' as string | any,
        };
    },
    getters: {
        getPokemonList: (state) => state.pokemonList,
    },
    actions: {
        /**
         * Fetching data from Pokemon endpoint
         */
        async fetchData() {
            try {
                await fetch(
                    'https://gist.githubusercontent.com/s-en-o/1e8188fe995ae1292ab713ac750f7aaa/raw/d2778781dff2e0daced28de6caed0d11e17fc6b2/pokemon.json'
                )
                    .then((response) => response.json())
                    .then((data) => {
                        this.pokemonList = data;
                    });
            } catch (error) {
                this.error = error;
                console.error(error);
            }
        },
        /**
         * Updating selected pokemon in Store
         * @param {Object} selectedPokemon - Pokemon object
         */
        updateSelectedPokemon(incomingSelectedPokemon: pokemonItem) {
            this.pokemonSelected = incomingSelectedPokemon;
        },
    },
});
