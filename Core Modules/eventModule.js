// Node.js offers us the option to handle events using the events module

// importing events module
const EventEmitter = require('events');
   
// Creating object of EventEmitter class 
var eventEmitter = new EventEmitter();

const callBack1 = () => {
    console.log("I am in callback 1");
}

const callBack2 = () => {
    console.log("I am in callBack 2");
}

// Event Listeners handle the triggered events using the on(), addListener(), and once() methods. These methods fire off callback functions attached to it when the corresponding named event is triggered.
// Using on() or addListener() methods, listeners can be added multiple times if multiple calls are made to the same combination of event and listener.
// But the once() method allows for responding to the event only once i.e, The listener is invoked only the first time and never again.
eventEmitter.on('myEvent', (number) => {
    console.log(`Hello I am called ${number} times`);
});
eventEmitter.on('myEvent', callBack1);
eventEmitter.on('myEvent', callBack2);

// The eventEmitter.removeListener() takes two argument event and listener, and removes that listener from the listeners array that is subscribed to that event. 
// While eventEmitter.removeAllListeners() removes all the listener from the array which are subscribed to the mentioned event.
// Syntax
// eventEmitter.removeListener(event, listener)
// eventEmitter.removeAllListeners([event])
// Remove 1st listener from the listener queue
eventEmitter.removeListener('myEvent', callBack1);

//  Every event is named event in nodejs. We can trigger an event by emit(event, [arg1], [arg2], […]) function. We can pass an arbitrary set of arguments to the listener functions.
// SYNTAX => eventEmitter.emit(event, [arg1], [arg2], [...])
// Triggering myEvent
eventEmitter.emit('myEvent', 2);