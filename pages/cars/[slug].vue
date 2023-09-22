<script setup>

const route = useRoute()
const { slug } = route.params

const { data, error, pending } = await useFetch('/api/cars/car', {
  method: 'post',
  body: { slug },
});

const car = data.value;

useHead({
    title: `${car.name} | Car Rental`,
    meta: [
        {
            name: 'description',
            content: car.description
        },
        {
          name: 'title',
          content: `${car.name} | Car Rental`
        }
    ],
})

</script>

<template>

    <div v-if="pending">
        Loading...
    </div>
    <div v-else>
        <CarDetails :car="car" />
    </div>

    <div>
        <SectionRecomendedCar />
    </div>
    
</template>