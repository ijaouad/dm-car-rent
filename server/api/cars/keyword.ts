export default defineEventHandler(async (event) => {

    const { keyword } = await readBody(event)

    let url = 'https://dm-assignment-commonshare.koyeb.app/api/cars'

    const response = await fetch(`${url}?search=${keyword}`, {
        method: 'GET',
    });

    const cars = await response.json();

    return cars.data;
});