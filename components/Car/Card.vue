<script setup>

import { useWishlistStore } from '~/store/wishlist'
import { storeToRefs } from 'pinia'
 
defineProps({
    car: {
        type: Object
    }
});

const wishlistStore = useWishlistStore()
const { addToWishlist, removeFromWishlist, loved } = wishlistStore
const { getWishlist } = storeToRefs(wishlistStore)

const handleAddToWishlist = (car) => {
    addToWishlist(car)
}

const handleRemoveFromWishlist = (car) => {
    removeFromWishlist(car)
}

</script>

<template>
    <div class="car-card bg-white p-4 rounded-lg flex flex-col h-full" :title="car.name" v-show="car" >
        <div class="card-header flex justify-between">
            <NuxtLink :to="`/cars/${car.id}`" :rel="car.name" rel="next" data-cy="car-details-link" class="car-link">
                <span class="text-xl font-medium">{{ car.name }}</span>
            </NuxtLink>
            <button v-if="loved(car.id)" @click="handleRemoveFromWishlist(car)" data-cy="remove-from-wishlist">
                <IconeHeart class="text-red-500 w-6"/>
            </button>
            <button v-else @click="handleAddToWishlist(car)"  data-cy="add-to-wishlist">
                <IconeHeartStroke class="w-6" />
            </button>
        </div>
        <div>
            <p class="text-dark-gray">{{ car.type }}</p>
        </div>

        <NuxtLink :to="`/cars/${car.id}`" rel="next" data-cy="car-details-link">
            <div class="relative my-4">
                <img :src="car.img" class="px-5 my-8" :alt="car.name" />
                <div
                    class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-transparent to-white/80">
                </div>
            </div>
        </NuxtLink>

        <div class="flex justify-between gap-1 mb-4 mt-auto text-xs text-dark-gray whitespace-nowrap">
            <div class="flex items-center">
                <IconeFuel />
                <p class="ml-1">{{ car.gasolineLiter }}L</p>
            </div>
            <div class="flex items-center">
                <IconeWheel />
                <p class="ml-1">{{ car.kindOfTransition }}</p>
            </div>
            <div class="flex items-center">
                <IconePeople />
                <p class="ml-1">{{ car.people }} People</p>
            </div>
        </div>

        <div class="flex justify-between items-center gap-1">
            <p class="text-lg font-semibold">${{ car.pricePerDay.toFixed(2) }}/<span class="text-sm text-dark-gray font-normal">day</span>
            </p>
            <button @click="handleLoved(car.id)" class="text-white text-sm font-medium  px-4 py-2 bg-primary rounded-md">Rent Now</button>
        </div>
    </div>
</template>