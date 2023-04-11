/*
    * Title: Routes.
    * Descriptin: Application Routes.
    * Author: ------------------------
    * Date: ------------------------------
*/

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler')

const routes = {
    'sample': sampleHandler
}

module.exports = routes;