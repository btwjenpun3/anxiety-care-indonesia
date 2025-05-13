<template>
    <div class="bg-[#0095E0] flex flex-col">
        <div class="flex justify-between items-center text-white mx-3">
            <div class="">
                <h3 class="text-3xl font-semibold">
                    Selamat Datang
                </h3>
                <p class="mt-3">
                    Belum punya akun ?
                    <NuxtLink to="/auth/register" class="text-blue-700 underline font-bold">
                        Daftar disini
                    </NuxtLink>
                </p>
            </div>
            <div class="">
                <img src="/assets/img/register.png" alt="Step 3" class="max-w-full h-auto object-contain" />
            </div>
        </div>
        <div class="bg-white min-h-screen rounded-t-3xl">
            <div class="flex flex-col justify-center items-center mt-10">
                <div class="flex flex-col justify-center mt-12 w-72">
                    <input type="email" class="p-3 bg-gray-200 mt-4" placeholder="Email">
                    <input type="password" class="p-3 bg-gray-200 mt-4" placeholder="Password">
                    <NuxtLink class="bg-blue-400 p-4 mt-4 rounded-md text-white text-center">
                        Login
                    </NuxtLink>
                </div>
                <div class="mt-12">
                    <p class="text-gray-500">Atau login melalui :</p>
                </div>
                <div class="mt-12">
                    <div class="flex justify-between gap-3 rounded-4xl border border-blue-500 p-4">
                        <img src="/assets/img/google.webp" alt="Step 3" class="w-6" />
                        <button class="">
                            Lanjutkan dengan Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>