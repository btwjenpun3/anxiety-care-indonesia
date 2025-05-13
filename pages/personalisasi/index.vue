<template>
    <div class="bg-[#0095E0] flex flex-col">
        <div class="flex justify-between items-center text-white mx-3">
            <div class="">
                <h3 class="text-3xl font-semibold">
                    Personalisasi
                </h3>
            </div>
            <div class="">
                <img src="/assets/img/personalisasi.png" alt="Step 3" class="max-w-full h-auto object-contain" />
            </div>
        </div>

        <!-- Section 1 -->
        <div v-if="section1" class="bg-white min-h-screen rounded-t-3xl">
            <div class="flex justify-center gap-2 mt-8">
                <button class="bg-blue-300 rounded-3xl border-3 border-blue-300 px-6 p-1" />
                <button class="bg-gray-400 rounded-3xl border-3 border-gray-400 p-1" />
                <button class="bg-gray-400 rounded-3xl border-3 border-gray-400 p-1" />
            </div>
            <div class="flex flex-col justify-center text-center px-3">
                <div class="mt-8">
                    <h3 class="text-2xl font-semibold text-gray-600">
                        Apa harapanmu dengan Anxiety Care Indonesia ?
                    </h3>
                </div>
                <div class="text-gray-500 mt-8">
                    <p>Hal ini membantu kami untuk membuat pengalaman yang unik hanya untukmu.</p>
                </div>
                <div class="flex flex-col gap-3 mt-8">
                    <button class="p-3 border border-blue-500 rounded-3xl text-center text-gray-500">
                        Mendapatkan metode terapi kecemasan
                    </button>
                    <button class="p-3 border border-blue-500 rounded-3xl text-center text-gray-500">
                        Mendapatkan panduan dari profesional
                    </button>
                    <button class="p-3 border border-blue-500 rounded-3xl text-center text-gray-500">
                        Belajar mengelola kecemasan
                    </button>
                    <button class="p-3 border border-blue-500 bg-blue-500 rounded-3xl text-center text-white">
                        Mendapatkan dukungan dari komunitas
                    </button>
                </div>
            </div>
            <div class="border-t-2 border-t-blue-400 w-full mt-12">
                <div class="flex justify-between items-center px-3">
                    <NuxtLink class="text-blue-500 text-sm font-bold mt-3 mb-6 ml-4" to="/welcome">
                        Lewati
                    </NuxtLink>
                    <NuxtLink class="bg-blue-500 p-3 rounded-3xl text-white text-sm font-bold mt-3 mb-6 ml-4"
                        @click="section1 = false; section2 = true">
                        Lanjutkan
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Section 2 -->
        <div v-if="section2" class="bg-white min-h-screen rounded-t-3xl">
            <div class="flex justify-center gap-2 mt-8">
                <button class="bg-gray-400 rounded-3xl border-3 border-gray-400 p-1" />
                <button class="bg-blue-300 rounded-3xl border-3 border-blue-300 px-6 p-1" />
                <button class="bg-gray-400 rounded-3xl border-3 border-gray-400 p-1" />
            </div>
            <div class="flex flex-col justify-center text-center px-3">
                <div class="mt-8">
                    <h3 class="text-2xl font-semibold text-gray-600">
                        Jenis konten apa yang menarik kamu
                    </h3>
                </div>
                <div class="text-gray-500 mt-8">
                    <p>Beri tahu preferensi kamu dalam memilih jenis konten untuk mengatasi kecemasan</p>
                </div>
                <div class="flex flex-wrap gap-3 mt-8">
                    <button class="p-3 border border-blue-500 rounded-3xl text-center text-gray-500">
                        Atasi stress
                    </button>
                    <button class="p-3 border border-blue-500 rounded-3xl text-center text-gray-500">
                        Sensasi Gerd
                    </button>
                    <button class="p-3 border border-blue-500 rounded-3xl text-center text-gray-500">
                        Cara sembuh Gerd dan Anxiety
                    </button>
                    <button class="p-3 border border-blue-500 rounded-3xl text-center text-gray-500">
                        Sensasi Anxiety
                    </button>
                    <button class="p-3 border border-blue-500 bg-blue-500 rounded-3xl text-center text-white">
                        Cara sembuh Gerd
                    </button>
                    <button class="p-3 border border-blue-500 rounded-3xl text-center text-gray-500">
                        Cara atasi gejala Anxiety
                    </button>
                    <button class="p-3 border border-blue-500 rounded-3xl text-center text-gray-500">
                        Cara atasi gejala Gerd
                    </button>
                </div>
            </div>
            <div class="border-t-2 border-t-blue-400 w-full mt-12">
                <div class="flex justify-between items-center px-3">
                    <NuxtLink class="text-blue-500 text-sm font-bold mt-3 mb-6 ml-4" to="/welcome">
                        Lewati
                    </NuxtLink>
                    <NuxtLink class="bg-blue-500 p-3 rounded-3xl text-white text-sm font-bold mt-3 mb-6 ml-4"
                        @click="section2 = false; section3 = true">
                        Lanjutkan
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Section 3 -->
        <div v-if="section3" class="bg-white min-h-screen rounded-t-3xl">
            <div class="flex justify-center gap-2 mt-8">
                <button class="bg-gray-400 rounded-3xl border-3 border-gray-400 p-1" />
                <button class="bg-gray-400 rounded-3xl border-3 border-gray-400 p-1" />
                <button class="bg-blue-300 rounded-3xl border-3 border-blue-300 px-6 p-1" />
            </div>
            <div class="flex flex-col justify-center text-center px-3">
                <div class="mt-8">
                    <h3 class="text-2xl font-semibold text-gray-600">
                        Bagaimana cara kamu mengakses metode terapi ?
                    </h3>
                </div>
                <div class="text-gray-500 mt-8">
                    <p>Beritahu preferensi kamu dalam memilih metode terapi untuk mengatasi kecemasan.</p>
                </div>
                <div class="flex flex-col gap-3 mt-8">
                    <button class="p-3 border border-blue-500 rounded-3xl text-center text-gray-500">
                        Video Terapi
                    </button>
                    <button class="p-3 border border-blue-500 rounded-3xl text-center text-gray-500">
                        Mengikuti Pelatihan Online
                    </button>
                    <button class="p-3 border border-blue-500 bg-blue-500 rounded-3xl text-center text-white">
                        Mendengarkan Audio
                    </button>
                </div>
            </div>
            <div class="border-t-2 border-t-blue-400 w-full mt-12">
                <div class="flex justify-between items-center px-3">
                    <NuxtLink class="text-blue-500 text-sm font-bold mt-3 mb-6 ml-4" to="/welcome">
                        Lewati
                    </NuxtLink>
                    <NuxtLink class="bg-blue-500 p-3 rounded-3xl text-white text-sm font-bold mt-3 mb-6 ml-4"
                        to="/welcome">
                        Lanjutkan
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const section1 = ref(true)
const section2 = ref(false)
const section3 = ref(false)
</script>