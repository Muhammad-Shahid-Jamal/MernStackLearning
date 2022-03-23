const {EventEmitter} = require("events");
const { sleep } = require("../../utils");
const {EventType} = require("../event.enum");

const syncEvent = new EventEmitter();


syncEvent.on(EventType.START_SENDING_EMAIL,async(_Data)=>{
    console.log("start fetching user data");
    await sleep(1000*5);
    console.log("data fetched!");
    const sender = {
        ..._Data
    };
    syncEvent.emit(EventType.SEND_EMAIL,sender);
});


syncEvent.on(EventType.SEND_EMAIL,async(_Sender)=>{
    console.log("sending....");
    await sleep(1000*15);
    console.log("email sent!");
    console.log(_Sender);
    return _Sender;
});

module.exports.send_email = syncEvent;