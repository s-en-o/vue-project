<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
type Item = { name: string; url: string } | undefined;

defineProps({
    options: [],
});

const selected: Ref<Item> = ref();

function selection(query: string) {
    console.log(query, selected.value?.url);
}
</script>

<template>
    <p v-if="selected">Selected: {{ selected.name }} {{ selected.url }}</p>

    <i-select
        @search="selection"
        v-model="selected"
        :options="options"
        placeholder="Choose something.."
        label="name"
        search
    />
</template>
