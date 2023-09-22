<script setup>

const router = useRouter();

const input = ref('')
const openModal = ref(false)

const onSearch = (input) => {
    router.push(`/search/${input}`);
}


</script>


<template>
    <nav class="py-6 sm:border-b border-gray-100 px-5 sm-px-0 bg-white">
        <div class="container mx-auto flex justify-between items-center gap-16 relative">
            <div class="logo-container">
                <NuxtLink to="/" rel="next">
                    <span class="text-4xl font-semibold text-primary">DM</span>
                </NuxtLink>
            </div>

            <div
                class="search-bar sm:flex-1 absolute sm:static left-1/2 transform -translate-x-1/2 sm:-translate-x-0 -bottom-16 w-full sm:w-auto">
                <div class="relative flex items-center w-full h-12 rounded-full border">
                    <div class="grid place-items-center h-full w-12 text-gray-300">
                        <IconeSearch />
                    </div>

                    <input id="search" type="text" v-model="input"
                        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 rounded-full"
                        placeholder="Search something here" @keyup.enter="onSearch(input)" data-cy="search-car-input" />
                </div>
            </div>

            <div class="wishlist-btn">
                <button class="border rounded-full p-2 text-gray-500" v-show="!openModal" @click="openModal = true">
                    <IconeHeart />
                </button>
                <button class="border rounded-full p-2 text-gray-500" v-show="openModal" @click="openModal = false">
                    <IconeClose />
                </button>
            </div>
        </div>
    </nav>

    <div class="relative" v-show="openModal">
        <div class="w-1/3 bg-white absolute right-0 top-0 h-screen overflow-y-scroll p-3">
            <CarWishlist />
        </div>
    </div>
</template>