<template>
    <footer class="bg-white mt-10">
        <div class="container mx-auto p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <div class="logo-container">
                        <NuxtLink to="/" rel="next">
                            <span class="text-4xl font-semibold text-primary">DM</span>
                        </NuxtLink>
                    </div>
                    <p class="w-full md:w-2/3 text-dark/60 mt-3">Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-lg font-semibold">About</h2>
                        <ul class="text-dark/60">
                            <li class="mb-4">
                                <NuxtLink to="/" class="hover:underline" rel="next">How it works</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/" class="hover:underline" rel="next">Featured</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/" class="hover:underline" rel="next">Partnership</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/" class="hover:underline" rel="next">Bussiness Relation</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-lg font-semibold">Community</h2>
                        <ul class="text-dark/60">
                            <li class="mb-4">
                                <NuxtLink to="/" class="hover:underline" rel="next"> Events</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/" class="hover:underline" rel="next"> Blog</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/" class="hover:underline" rel="next"> Podcast</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/" class="hover:underline" rel="next"> Invite a friend</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-lg font-semibold">Socials</h2>
                        <ul class="text-dark/60">
                            <li class="mb-4">
                                <NuxtLink to="/" class="hover:underline" rel="next">Discord</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/" class="hover:underline" rel="next">Instagram</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/" class="hover:underline" rel="next">Twitter</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/" class="hover:underline" rel="next">Facebook</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div class="text-sm font-medium sm:flex sm:items-center sm:justify-between">
                <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                    <NuxtLink to="/" class="hover:underline" rel="next">Privacy & Policy</NuxtLink>
                    <NuxtLink to="/" class="hover:underline" rel="next">Terms & Condition</NuxtLink>
                </div>
                <span class="sm:text-center sm:order-first">©2022 DM. All rights reserved</span>
            </div>
        </div>
    </footer>
</template>