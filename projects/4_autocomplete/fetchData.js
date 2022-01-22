//Fetch Api url
export function getJson(url) {
    return fetch(url)
        .then(function (resp) {
            return resp.json();

        })
        .catch(function (err) {
            console.error(err);
        });
}

