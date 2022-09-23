<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '@/stores/data';
import type { Ref } from 'vue';
import type { pokemonItem } from '@/stores/data';

defineProps({
    options: Array,
});

const selected: Ref<pokemonItem> = ref();

const store = useStore();

function onSelection(query: string) {
    if (!query) return;

    // console.log(selected.value);

    const selectedPokemon: pokemonItem = {
        name: query,
        url: selected.value?.url,
    };

    store.updateSelectedPokemon(selectedPokemon);
}
</script>

<template>
    <i-select
        @search="onSelection"
        v-model="selected"
        :options="options"
        placeholder="Choose Pokemon.."
        label="name"
        search
    />
</template>
