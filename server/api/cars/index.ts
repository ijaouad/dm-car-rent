export default defineEventHandler(async (event) => {

    let url = 'https://dm-assignment-commonshare.koyeb.app/api/cars'

    const response = await fetch(url, {
        method: 'GET'
    });

    const cars = await response.json();    

    return cars.data;
});