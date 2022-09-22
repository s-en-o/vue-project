<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router';
import delve from 'dlv';
import Select from './components/CompSelect.vue';
import Card from './components/CompCard.vue';
import { useStore } from '@/stores/data';

const store = useStore();
</script>

<template>
    <!-- <header>
        <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="125"
            height="125"
        />

        <div class="wrapper">
            <HelloWorld msg="You did it!" />

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header> -->
    <!-- <RouterView /> -->

    <section class="main-pokemon">
        <Select
            :options="delve(store, 'pokemonList.results', 'No queries found')"
        />

        <i-loader color="primary" size="auto" v-if="store.loading" />

        <Card
            class="_margin-top:2"
            v-if="delve(store, 'pokemonSelected.name')"
            :name="delve(store, 'pokemonSelected.name')"
            :image="
                delve(
                    store,
                    'pokemonSelected.sprites.other.official-artwork.front_default'
                )
            "
        />
    </section>
</template>

<style scoped lang="scss">
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';
.main-pokemon {
    width: 100%;

    @include breakpoint-up('md') {
        max-width: 50%;
        margin: 0 auto;
    }
}

/*
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
} */
</style>
