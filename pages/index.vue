<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white rounded-lg shadow-lg p-8 mx-3">
            <img src="/assets/img/logo.png" alt="">
        </div>
    </div>
</template>

<script setup>
onMounted(() => {
    setTimeout(() => {
        window.location.href = '/step'
    }, 2000)
})  
</script>
