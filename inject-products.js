const fs = require('fs');
const request = require('request');

fs.readFile('products.json', (err, data) => {
    if (err) throw err;
    let PRODUCTS = JSON.parse(data);
    //console.log(PRODUCTS[0].id, PRODUCTS[0].image_url);
    let i = 0;

    const loop = () => {
        if (i < PRODUCTS.length) {
            if (PRODUCTS[i].product_name_fr && PRODUCTS[i].image_url) {
                console.log('Adding: ', i, PRODUCTS.length, PRODUCTS[i].product_name_fr, PRODUCTS[i].image_url);
                let formData = {
                    url: PRODUCTS[i].image_url,
                    filepath: PRODUCTS[i].id + '.jpg',
                    metadata: JSON.stringify({
                        id: PRODUCTS[i].id,
                        product_name_fr: PRODUCTS[i].product_name_fr
                    })
                };
                request.post({
                    url: 'http://localhost:8888/add',
                    formData: formData
                }, function (errorLoopCall, responseLoopCall, bodyLoopCall) {
                    if (err) {
                        console.error('upload failed:', err);
                    } else {
                        i += 1;
                        loop();
                    }
                });
            } else {
                console.log('Error adding: ', i);
                i += 1;
                loop();
            }
        } else {
            console.log('END');
        }
    };
    loop();
});