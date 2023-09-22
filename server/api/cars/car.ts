export default defineEventHandler(async (event) => {

    const { slug } = await readBody(event)

    let url = 'https://dm-assignment-commonshare.koyeb.app/api/cars'

    const response = await fetch(`${url}/${slug}`, {
        method: 'GET',
    });

    const car = await response.json();

    return car;
});