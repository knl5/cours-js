 import createMultipleDataList from './createMultiple.js'

const promise1 =  fetch ('https://api-adresse.data.gouv.fr/search/?q="+input.value+"&type=housenumber&autocomplete=1')

 
    .then((response)=> {
    console.log("response", response);

    return response.json();
    })
    .then((data) => {
    console.log("data", data);

    data.features.forEach(address => {
        createMultipleDataList(address);
    });
    return data;
    });


export default promise1 