var util = require('util');

// The 'From' and 'To' fields are automatically populated with the values specified by the binding settings.
//
// You can also optionally configure the default From/To addresses globally via host.config, e.g.:
//
// {
//   "sendGrid": {
//      "to": "user@host.com",
//      "from": "Azure Functions <samples@functions.com>"
//   }
// }
module.exports = async function (context, req) {
    context.log('JavaScript queue trigger function processed order');

    context.bindings.message = {
        subject: util.format('Thanks for your order (#%d)!'),
        content: [{
            type: 'text/plain',
            value: util.format("%s, your order (%d) is being processed!")
        }]
    };
}