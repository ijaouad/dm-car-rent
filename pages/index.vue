<template>
    <main class="p-5">
        <span class="sr-only">Homepage</span>
        <div class="mt-16 sm:mt-0 flex flex-col md:flex-row gap-10">
            <CarBanner :content="bannerMain" class="hidden md:block"/>
            <CarBanner :content="bannerSecond" />
        </div>
    
        <SectionPopularCar />

        <SectionRecomendedCar />
    </main>
</template>


<script setup>
    const bannerMain = {
        title: "The Best Platform for Car Rental",
        description: "Ease of doing a car rental safely and reliably. Of course at a low price.",
        link: "#",
        image: "https://dm-assignment-commonshare.koyeb.app/img/1.png",
        background: "bg-pattern-primary bg-primary",
        bgButton: "bg-secondary"
    }

    const bannerSecond = {
        title: "Easy way to rent a car at a low price",
        description: "Providing cheap car rental services and safe and comfortable facilities.",
        link: "#",
        image: "https://dm-assignment-commonshare.koyeb.app/img/2.png",
        background: "bg-pattern-secondary bg-secondary",
        bgButton: "bg-primary"
    }
</script>