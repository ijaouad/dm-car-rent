<script setup>

const { data: cars, error, pending } = await useFetch('/api/cars/popular', {
  method: 'post',
  body: { popular: true },
});

</script>



<template>
    <section class="mt-4">
        <div class="flex justify-between py-5 font-medium">
            <span class="text-dark-gray">Popular Cars</span>
            <span class="text-primary hover:underline-offset-2 hover:underline">View All</span>
        </div>
        
        <div v-if="pending">
            Loading...
        </div>
        <div v-else class="flex gap-4 overflow-x-scroll no-scrollbar">
            <div v-for="car in cars" :key="car.id">
                <CarCard :car="car" />
            </div>
        </div>
    </section>
</template>