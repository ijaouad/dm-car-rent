<script setup>

const route = useRoute()
const { keyword } = route.params

const { data: cars, error, pending } = await useFetch('/api/cars', {
  method: 'post',
  body: { keyword }
});

</script>

<template>
    <section class="mt-4">
        <div class="flex justify-between py-5 font-medium">
            <span class="text-dark-gray">Search results for {{ keyword }}</span>
        </div>

        <div v-if="pending">
            Loading...
        </div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="car in cars" :key="car.id">
                <CarCard :car="car" />
            </div>
        </div>
    </section>

</template>