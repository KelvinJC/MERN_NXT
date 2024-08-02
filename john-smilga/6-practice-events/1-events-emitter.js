const EventEmitter = require('events');

const emitter = new EventEmitter();

// 1- register a listener for events
emitter.on('response', (name, id)=> {
    console.log(`Data recieved ${name}, ${id}`);
})

// 2- multiple listeners can be registered for the same event
// 3- listeners of the same event can variance in their event arguments
emitter.on('response', ()=> { 
    console.log(`Some other logic here `);
})

// produce events
emitter.emit('response', 'Kaizen', 34);