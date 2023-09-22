<script setup>
import { storeToRefs } from 'pinia';
import { useWishlistStore } from '~/store/wishlist';

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

            <div v-for="car in getWishlist" :key="car.id">
                <div class="flex items-center border p-5 rounded-lg mb-3">
                    <div class="">
                        <img :src="car.img" alt="" class="w-16 h-10 object-contain">
                    </div>
                    <div class="mx-3">
                        <h2>{{ car.name }}</h2>
                    </div>
                    <div class="ml-auto">
                        <button v-if="loved(car.id)" @click="handleRemoveFromWishlist(car)">
                            <IconeHeart class="text-red-500 w-6" />
                        </button>
                        <button v-else @click="handleAddToWishlist(car)">
                            <IconeHeartStroke class="w-6" />
                        </button>
                    </div>
                </div>

            </div>

</template>