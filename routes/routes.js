/**
 * Created by alfredwong on 22/10/18.
 */

var appRouter = function (app) {
    app.get("/", function(req, res) {
        res.status(200).send("<h1>Sample Restful App</h1>")
    })
}

module.exports = appRouter