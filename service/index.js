const {send_email} = require("./email_event/email_event.service");
const {EventType} = require("./event.enum");

/**
 * @param {Object} data
 * @returns {boolean}
 */
function  init(data) { 
    return send_email.emit(EventType.START_SENDING_EMAIL,data);
}

module.exports.init = init;