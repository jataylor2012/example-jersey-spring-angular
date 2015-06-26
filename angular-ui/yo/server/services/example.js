module.exports = function (server, fs) {
    'use strict';

    server.get('/service/ping', function (req, res) {
        var filename = require('path').resolve('.', 'data/example.json');
        console.info('Reading ' + filename);
        fs.readFile(filename, 'utf8', function (err, data) {
            res.write(data);
            res.end();
        });
    });
};
