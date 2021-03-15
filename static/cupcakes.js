const $cupcakeList = $('.cupcakes-list');
const BASE_URL = 'http://localhost:5000//api/cupcakes'

async function getCupcakes() {
    let getRequest = await axios.get(BASE_URL)
    cupcakes = getRequest.data.cupcakes;
    return cupcakes;
}

async function addCupcakesToPage() {
    cupcakes = await getCupcakes()
    for (let cupcake of cupcakes) {
        let $li = $(`<li></li>`);
        let $img = $(`<img src=${cupcake.image}></img>`);
        $li.text(`flavor: ${cupcake.flavor} | size: ${cupcake.size} | rating: ${cupcake.rating}`)
        $li.append($img);
        $cupcakeList.append($li);
    }
}

addCupcakesToPage()