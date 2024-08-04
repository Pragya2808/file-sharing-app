const http = require("http");

function getData(path) {
    let parsed = '';
    return new Promise((resolve, reject) => {
        http.get(path, function (res) {
            let body = '';
            res.on('data', chunk => body += chunk);
            try {
                res.on('end', () => {
                    parsed = JSON.parse(body);
                    resolve(parsed);
                })
            }
            catch (err) {
                reject(err);
            }
        }).on('error', e => reject(e.message));
    });
};


module.exports = {
    getData
};
