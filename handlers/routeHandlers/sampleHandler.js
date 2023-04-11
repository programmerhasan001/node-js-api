/*
    * Title: Sample handler.
    * Descriptin: Sample handler.
    * Author: ------------------------
    * Date: ------------------------------
*/


// module scaffolding
const handler = {};


handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties)
    callback(200, { message: 'sample url' });
}

module.exports = handler;