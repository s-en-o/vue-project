<script setup lang="ts">
import { ref } from 'vue';

defineProps({
    options: [],
});

const selected = ref<object>();
function selection() {
    console.log(selected);
}
</script>

<template>
    <i-select
        @click="selection()"
        v-model="selected"
        :options="options"
        placeholder="Choose something.."
        label="name"
    />
</template>
