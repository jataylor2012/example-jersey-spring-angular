// This file is used by NodeJS to load all the services in this directory
// Each service is passed the arguments
module.exports = function(server, fs, utilities) {  
    fs.readdirSync(__dirname).forEach(
        function(file) {
            if (file === "index.js"
                || file.substr(file.lastIndexOf('.') + 1) !== 'js') {
                return;
        }
        var name = file.substr(0, file.indexOf('.'));
        require('./' + name)(server, fs);
    });
};