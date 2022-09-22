<script setup lang="ts">
// import { useStore } from '@/stores/data';

defineProps({
    name: String,
    image: String,
});

// const store = useStore();
</script>

<template>
    <i-card>
        <template #header>
            {{ name }}
        </template>
        <template #image>
            <img :src="image" :alt="name" />
        </template>
    </i-card>
</template>
