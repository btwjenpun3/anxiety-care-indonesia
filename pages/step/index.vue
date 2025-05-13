<template>
    <div class="bg-white flex flex-col">
        <!-- Hero Content (atas) -->
        <div class="flex flex-col items-center justify-center text-center">
            <div class="mt-3 mb-6">
                <img src="/assets/img/logo.png" alt="Logo" class="max-w-42" />
            </div>
        </div>

        <div class="flex justify-center items-center">
            <img v-if="section1" src="/assets/img/step1.png" alt="Step 1" class="max-w-full h-auto object-contain" />
            <img v-if="section2" src="/assets/img/step2.png" alt="Step 2" class="max-w-full h-auto object-contain" />
            <img v-if="section3" src="/assets/img/step3.png" alt="Step 3" class="max-w-full h-auto object-contain" />
        </div>

        <!-- Section 1 -->
        <div v-if="section1" class="rounded-t-3xl bg-[#0095E0] mt-auto">
            <div class="flex flex-col items-center justify-center text-center mt-10 mb-12 px-4">
                <h1 class="text-white text-2xl font-bold mt-3">Selamat datang di Anxiety Care Indonesia</h1>
                <p class="text-white mt-2">Kami akan membantu anda untuk mengatasi kecemasan yang anda alami</p>
                <p class="text-white mt-2">Silahkan klik tombol dibawah ini untuk memulai</p>
            </div>
            <div class="flex justify-center gap-2">
                <button class="bg-blue-300 rounded-3xl border-3 border-blue-300 px-6 p-1" />
                <button class="bg-white rounded-3xl border-3 border-white p-1" />
                <button class="bg-white rounded-3xl border-3 border-white p-1" />
            </div>
            <div class="border-t-4 border-t-white w-full mt-6">
                <div class="flex justify-between items-center mx-4">
                    <NuxtLink class="text-white text-sm font-bold mt-3 mb-6 ml-4" to="/auth/register">
                        Lewati
                    </NuxtLink>
                    <NuxtLink class="bg-white p-3 rounded-2xl text-blue-500 text-sm font-bold mt-3 mb-6 ml-4"
                        @click="section1 = false; section2 = true">
                        Lanjutkan
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Section 2 -->
        <div v-if="section2" class="rounded-t-3xl bg-[#0095E0] mt-auto">
            <div class="flex flex-col items-center justify-center text-center mt-10 mb-12 px-4">
                <h1 class="text-white text-2xl font-bold mt-3">Dapatkan Dukungan Bersama</h1>
                <p class="text-white mt-2">Temukan Ruang aman dalam komunitas yang memahami kesehatan mental kamu</p>
            </div>
            <div class="flex justify-center gap-2">
                <button class="bg-white rounded-3xl border-3 border-white p-1" />
                <button class="bg-blue-300 rounded-3xl border-3 border-blue-300 px-6 p-1" />
                <button class="bg-white rounded-3xl border-3 border-white p-1" />
            </div>
            <div class="border-t-4 border-t-white w-full mt-6">
                <div class="flex justify-between items-center mx-4">
                    <NuxtLink class="text-white text-sm font-bold mt-3 mb-6 ml-4" to="/auth/register">
                        Lewati
                    </NuxtLink>
                    <NuxtLink class="bg-white p-3 rounded-2xl text-blue-500 text-sm font-bold mt-3 mb-6 ml-4"
                        @click="section2 = false; section3 = true">
                        Lanjutkan
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Section 3 -->
        <div v-if="section3" class="rounded-t-3xl bg-[#0095E0] mt-auto">
            <div class="flex flex-col items-center justify-center text-center mt-10 mb-12 px-4">
                <h1 class="text-white text-2xl font-bold mt-3">Pilihan Metode Terapi yang Efektif</h1>
                <p class="text-white mt-2">Temukan metode terapi yang terbukti mengatasi kecemasan</p>
            </div>
            <div class="flex justify-center gap-2">
                <button class="bg-white rounded-3xl border-3 border-white p-1" />
                <button class="bg-white rounded-3xl border-3 border-white p-1" />
                <button class="bg-blue-300 rounded-3xl border-3 border-blue-300 px-6 p-1" />
            </div>
            <div class="border-t-4 border-t-white w-full mt-6">
                <div class="flex justify-between items-center mx-4">
                    <NuxtLink class="text-white text-sm font-bold mt-3 mb-6 ml-4" to="/auth/register">
                        Lewati
                    </NuxtLink>
                    <NuxtLink class="bg-white p-3 rounded-2xl text-blue-500 text-sm font-bold mt-3 mb-6 ml-4"
                        to="/auth/register">
                        Lanjutkan
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const section1 = ref(true);
const section2 = ref(false);
const section3 = ref(false);
</script>
