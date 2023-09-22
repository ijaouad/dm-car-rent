<script setup>
import { storeToRefs } from 'pinia';
import { useWishlistStore } from '~/store/wishlist';


defineProps({
    car: {
        type: Object,
        required: true,
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
    <div class="grid grid-cols-5 gap-5 p-5">
        <div class="gallery col-span-5 md:col-span-2 text-white">
            <div class="bg-pattern-primary bg-primary p-5 rounded-lg">
                <h2 class="text-3xl sm:w-3/4">Sports car with the best design and acceleration</h2>
                <h3 class="mb-6 mt-4 sm:w-3/4 text-sm">Safety and comfort while driving a futuristic and elegant sports car </h3>
                <img :src="car.img" class=" mt-5 sm:mt-3 mx-auto" :alt="car.name" />
            </div>
            <div class="images-list flex gap-3 mt-3">
                <div class="w-1/3 h-24 p-1 border-2 border-blue-500 rounded-lg">
                    <img :src="car.img" class="bg-pattern-primary bg-primary h-full w-full object-contain rounded-md" :alt="car.name"/>
                </div>
                <div class="w-1/3 h-24 p-1 rounded-lg">
                    <img :src="car.images[0].url" class="h-full w-full object-cover rounded-lg" :alt="`${car.name} interior`"/>
                </div>
                <div class="w-1/3 h-24 p-1 rounded-lg">
                    <img :src="car.images[1].url" class="h-full w-full object-cover rounded-lg" :alt="`${car.name} interior`"/>
                </div>
            </div>
        </div>

        <div class="details col-span-5 md:col-span-3 p-5 rounded-lg flex flex-col">
            <div class="flex gap-5 items-center">
                <h1 class="text-3xl font-medium">{{ car.name }}</h1>
                
                <button v-if="loved(car.id)" @click="handleRemoveFromWishlist(car)" data-cy="add-to-wishlist">
                    <IconeHeart class="text-red-500"/>
                </button>
                <button v-else @click="handleAddToWishlist(car)" data-cy="remove-from-wishlist">
                    <IconeHeartStroke class="text-dark-gray"/>
                </button>


            </div>

            <div class="flex gap-5 mt-1">
                <div class="flex">
                    <IconeGoldStar />
                    <IconeGoldStar />
                    <IconeGoldStar />
                    <IconeGoldStar />
                    <IconeEmptyStar />
                </div>
                <small class="text-xs">+440 Reviewer</small>
            </div>

            <div class="mb-5">
                <p class="my-5" >{{ car.description }}</p>

                <div class="flex flex-wrap gap-5">
                    <div class="flex gap-3">
                        <span class="text-dark-gray">Type Car</span>
                        <span>{{car.type }}</span>
                    </div>
                    <div class="flex gap-3">
                        <span class="text-dark-gray">Capacity</span>
                        <span>{{car.people }} People</span>
                    </div>
                    <div class="flex gap-3">
                        <span class="text-dark-gray">Gasoline</span>
                        <span>{{car.gasolineLiter }}L</span>
                    </div>
                    <div class="flex gap-3">
                        <span class="text-dark-gray">Steering </span>
                        <span>{{car.kindOfTransition }}</span>
                    </div>
                </div>
            </div>

            <div class="flex justify-between items-center gap-5 mt-auto">
                <p class="text-xl font-semibold">${{ car.pricePerDay.toFixed(2) }}/<span class="text-sm text-gray-500 font-normal">day</span>
                </p>
                <button class="text-white px-4 py-2 bg-blue-600 rounded-md">Rent Now</button>
            </div>


        </div>

    </div>
</template>