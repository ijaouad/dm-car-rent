<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  }
});
</script>


<template>
  <div class="text-white p-5 relative rounded-lg flex-1" :class="content.background">
    <h2 class="text-3xl sm:w-3/4">{{ content.title }}</h2>
    <p class="mb-6 mt-4 sm:w-3/4 text-sm">{{ content.description }}</p>
    <NuxtLink :to="content.link" class="px-4 py-2 rounded-md" :class="content.bgButton"  rel="external">
      Rental Car
    </NuxtLink>
    <div class="flex justify-center">
      <img :src="content.image" class="w-4/5 sm:w-3/5 mt-5 sm:mt-3" :alt="content.title" />
    </div>
  </div>
</template>

