<template>
    <main>
        <slot />
    </main>
</template>

<script setup>
useHead({
    title: 'Anxiety Indonesia',
    meta: [
        { name: 'description', content: 'My App Description' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    bodyAttrs: {
        class: 'bg-[#0095E0]',
    },
})
</script>