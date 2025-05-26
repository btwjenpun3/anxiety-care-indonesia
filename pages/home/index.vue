<template>
    <div class="bg-[#0095E0] pt-6">
        <div class="flex flex-row justify-between items-center px-2">
            <div class="">
                <img src="/assets/img/avatar.jpeg" alt="" class="w-16 h-16 rounded-full" />
            </div>
            <div class="text-white">
                <div class="flex flex-col items-start">
                    <h3 class="text-xl font-bold">
                        Halo, Jhon Rizky !
                    </h3>
                    <div class="flex flex-row items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-orange-500" width="29px" height="29px"
                            viewBox="0 0 24 24" fill="none">
                            <path
                                d="M5 19V6.2C5 5.0799 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.0799 19 6.2V17H7C5.89543 17 5 17.8954 5 19ZM5 19C5 20.1046 5.89543 21 7 21H19M18 17V21M10 6V10M14 10V14M8 8H12M12 12H16"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-md">Basic Member</p>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="flex flex-row gap-3">
                    <img src="/assets/img/bell.svg" alt="" class="w-7 h-7">
                    <img src="/assets/img/bookmark.svg" alt="" class="w-7 h-7">
                </div>
            </div>
        </div>

        <div class="w-auto md:w-full absolute top-15 bg-white rounded-xl border-1 border-blue-500 mx-2 md:mx-0 mt-12">
            <div class="grid grid-cols-3 gap-3 p-6">
                <NuxtLink to="/mentor">
                    <div class="flex items-center justify-center flex-col gap-1">
                        <img src="/assets/img/home1.jpg" class="w-84 h-16 md:w-32 md:h-32 object-fit rounded-lg">
                        <p class="text-gray-500 text-xs">Mentor</p>
                    </div>
                </NuxtLink>
                <NuxtLink>
                    <div class="flex items-center justify-center flex-col gap-1">
                        <img src="/assets/img/home2.jpg" class="w-84 h-16 md:w-32 md:h-32 object-fit rounded-lg">
                        <p class="text-gray-500 text-xs">Dokter</p>
                    </div>
                </NuxtLink>
                <NuxtLink>
                    <div class="flex items-center justify-center flex-col gap-1">
                        <img src="/assets/img/home3.jpg" class="w-84 h-16 md:w-32 md:h-32 object-fit rounded-lg">
                        <p class="text-gray-500 text-xs">Pelatihan Online</p>
                    </div>
                </NuxtLink>
                <NuxtLink>
                    <div class="flex items-center justify-center flex-col gap-1">
                        <img src="/assets/img/home4.jpg" class="w-84 h-16 md:w-32 md:h-32 object-fit rounded-lg">
                        <p class="text-gray-500 text-xs">Toko Obat</p>
                    </div>
                </NuxtLink>
                <NuxtLink>
                    <div class="flex items-center justify-center flex-col gap-1">
                        <img src="/assets/img/home5.jpg" class="w-84 h-16 md:w-32 md:h-32 object-fit rounded-lg">
                        <p class="text-gray-500 text-xs">Lokasi ACI</p>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="bg-white mt-18 p-3 pt-52 md:pt-86">
            <div class="flex justify-between items-center">
                <h3 class="text-gray-500 font-semibold">Rekomendasi untukmu</h3>
                <button class="bg-[#0095E0] text-white text-xs rounded-lg w-1/3 p-1">
                    Lihat Semua
                </button>
            </div>
            <div class="flex flex-row gap-3 mt-3 overflow-x-auto">
                <div class="border rounded-sm w-56 h-full mt-3">
                    <img src="/assets/img/news.svg" alt="" class="object-cover rounded-sm">
                    <div class="p-1">
                        <p class="text-gray-500 text-sm">Apa itu pola makan 4P ?</p>
                        <div class="flex flex-row items-center gap-2">
                            <img src="/assets/img/video.svg" alt="" class="w-6 h-6">
                            <p class="text-gray-500 text-xs">Video</p>
                        </div>
                    </div>
                </div>
                <div class="border rounded-sm w-56 h-full mt-3">
                    <img src="/assets/img/news.svg" alt="" class="object-cover rounded-sm">
                    <div class="p-1">
                        <p class="text-gray-500 text-sm">Apa itu pola makan 4P ?</p>
                        <div class="flex flex-row items-center gap-2">
                            <img src="/assets/img/video.svg" alt="" class="w-6 h-6">
                            <p class="text-gray-500 text-xs">Video</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-[#0095E0] rounded-sm p-3 mt-6">
                <div class="flex flex-row justify-between items-center">
                    <div class="">
                        <img src="/assets/img/medicine.jpg" alt="" class="w-16 h-16 rounded-lg">
                    </div>
                    <div class="flex flex-col justify-center items-start">
                        <h3 class="text-white font-semibold text-lg">Toko Obat</h3>
                        <p class="text-white text-sm">Temukan Obat disini</p>
                    </div>
                    <div class="">
                        <button class="bg-white rounded-md text-blue-500 font-semibold p-2">
                            Lihat Produk
                        </button>
                    </div>
                </div>
            </div>

            <div class="mt-6">
                <h3 class="text-gray-500 font-semibold">
                    Dapatkan Dukungan
                </h3>
                <div class="flex flex-col gap-3 mt-3">
                    <div class="border rounded-sm border-sm border-gray-400">
                        <div class="flex flex-row items-center gap-3 p-2">
                            <img src="/assets/img/medicine.jpg" alt="" class="w-12 h-12 rounded-lg">
                            <div class="flex flex-col justify-between">
                                <p class="text-md text-gray-500">
                                    Pelatihan Online
                                </p>
                                <p class="text-xs text-gray-500">
                                    Penyembuhan Anxiety dan Gerd didampingi mentor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="border rounded-sm border-sm border-gray-400">
                        <div class="flex flex-row items-center gap-3 p-2">
                            <img src="/assets/img/medicine.jpg" alt="" class="w-12 h-12 rounded-lg">
                            <div class="flex flex-col justify-between">
                                <p class="text-md text-gray-500">
                                    Konsultasi
                                </p>
                                <p class="text-xs text-gray-500">
                                    Konseling dengan Profesional
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-between items-center mt-6">
                <h3 class="text-gray-500 font-semibold">Explore</h3>
                <button class="bg-[#0095E0] text-white text-xs rounded-lg w-1/3 p-1">
                    Lihat Semua
                </button>
            </div>
            <div class="flex flex-row gap-3 mt-3 overflow-x-auto">
                <div class="border rounded-sm w-56 h-full mt-3">
                    <img src="/assets/img/news.svg" alt="" class="object-cover rounded-sm">
                    <div class="p-1">
                        <p class="text-gray-500 text-sm">Apa itu pola makan 4P ?</p>
                        <div class="flex flex-row items-center gap-2">
                            <img src="/assets/img/video.svg" alt="" class="w-6 h-6">
                            <p class="text-gray-500 text-xs">Video</p>
                        </div>
                    </div>
                </div>
                <div class="border rounded-sm w-56 h-full mt-3">
                    <img src="/assets/img/news.svg" alt="" class="object-cover rounded-sm">
                    <div class="p-1">
                        <p class="text-gray-500 text-sm">Apa itu pola makan 4P ?</p>
                        <div class="flex flex-row items-center gap-2">
                            <img src="/assets/img/video.svg" alt="" class="w-6 h-6">
                            <p class="text-gray-500 text-xs">Video</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>