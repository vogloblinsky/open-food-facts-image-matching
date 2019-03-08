const download = require('download-file');
const request = require('request');
const fs = require('fs-extra');

let page_inc = 1;
const page_size = 500;
let URL = `https://fr.openfoodfacts.org/cgi/search.pl?tagtype_0=categories&tag_contains_0=contains&tag_0=Biscuits&page_size=${page_size}&action=process&json=1&page=`;
let products_count = 0;
let pages_to_call = 0;
let products = [];

request(URL + page_inc, function(error, response, body) {
    const data = JSON.parse(body);
    products_count = data.count;
    pages_to_call = Math.ceil(products_count / page_size);
    products = [...products, ...data.products];
    console.log(products_count, pages_to_call);

    const loop = () => {
        if (page_inc < pages_to_call) {
            page_inc += 1;
            console.log('calling : ', URL, page_inc);

            request(URL + page_inc, function(errorLoopCall, responseLoopCall, bodyLoopCall) {
                let dataLoop = JSON.parse(bodyLoopCall);
                products = [...products, ...dataLoop.products];
                loop();
            });
        } else {
            console.log('end products', products.length);
            const file = 'products.json';
            fs.outputJson(file, products, err => {
                console.log(err) // => null
            });
        }
    };
    loop();
});