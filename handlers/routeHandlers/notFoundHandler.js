/*
    * Title: not found handler.
    * Descriptin: 4O4 not found handler.
    * Author: ------------------------
    * Date: ------------------------------
*/


// module scaffolding
const handler = {};


handler.notFoundHandler = (requestProperties, callback) => {
    console.log("Not Found")
    callback(404, {
        message: "requested url not found"
    })
}

module.exports = handler;