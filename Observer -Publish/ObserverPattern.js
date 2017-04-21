/*
  Observer (Publish/Subscribe) Pattern

  The Observer Pattern defines a one-to-many dependency between objects so that when
  one object changes state all of its dependents are notified and updated automatically.
*/

// Redux is based on the Observer Pattern
// https://github.com/reactjs/redux/blob/master/src/createStore.js

// Example A
const listeners = {}

const emit = (event) => {
    for (let listener in listeners) {
        console.log(`Listener: ${listener}\nEvent: ${event}`)
    }
}

const subscribe = (name) => listeners[name] ? console.log('Already Subscribed'): listeners[name] = true

const unsubscribe = (name) => listeners[name] ? console.log('Already Unsubscribed'): delete listeners[name]

subscribe('Chris')
emit('Chris Subscribed')

subscribe('Kai')
emit('Kai Subscribed')

unsubscribe('Chris')
emit('Chris Unsubscribed')
emit('Hello')

console.log('\n')

// Example B
const events = {
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(event => event(data))
        }
    },
    events: {},
    subscribe(eventName, callBack) {
        this.events[eventName] ? this.events[eventName].push(callBack): this.events[eventName] = [callBack]
    },
    unsubscribe(eventName, callBack) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(event => event !== callBack)
        }
    }
}

const log = (msg) => console.log(msg)

events.subscribe('message', log)
events.emit('message', 'This is only test')
events.unsubscribe('message', log)
events.emit('message', 'does not exist')
