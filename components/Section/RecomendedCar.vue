<script setup>

const { data, error, pending } = await useFetch('/api/cars', {
  method: 'post',
  body: { recomended: true }
});


</script>

<template>
    <section class="mt-4">
        <div class="py-5 font-medium">
            <span class="text-dark-gray">Recomended Cars</span>
        </div>

        <div v-if="pending">
            Loading...
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="car of data" :key="car.id">
                <CarCard :car="car" />
            </div>
        </div>
        
        <!-- <div class="text-center mt-10" @click="loadMore()"> -->
        <div class="text-center mt-10" @click="loadMore()">
            <button class="text-white text-sm font-medium px-4 py-2 bg-primary rounded-md">Show more car</button>
        </div>

    </section>
</template>
