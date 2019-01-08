var utils = {
    getPath: function (relativePath) {
        return `${__dirname}${relativePath}`
    },
    start: function(app) {
        app.get()
    }
}
module.exports = utils