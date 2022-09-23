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
            pokemonList: undefined as Response | any,
            pokemonSelected: undefined as pokemonItem,
            error: '' as string | any,
            loading: false,
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
            this.loading = true;

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
            } finally {
                this.loading = false;
            }
        },
        /**
         * Updating selected pokemon in Store
         * @param {Object} incomingSelectedPokemon - Pokemon object
         */
        async updateSelectedPokemon(incomingSelectedPokemon: pokemonItem) {
            this.loading = true;

            try {
                await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${incomingSelectedPokemon?.name}`
                ).then((response) =>
                    response.json().then((data) => {
                        this.pokemonSelected = data;
                    })
                );
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        },
        /**
         * Find the next Pokemon in the array
         */
    },
});
