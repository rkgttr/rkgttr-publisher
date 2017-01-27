/**
 * rkgttr-publisher
 *
 * Copyright © 2016 Erik Guittiere. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
const pub = (() => {
  let events = {};
  function listType(type) {
    return events[type.toLowerCase()] || (events[type.toLowerCase()] = []);
  }
  function removeType(type) {
    delete events[type];
  }
  return {
    /**
     * Register an event handler
     * @method on
     * @param  {String}   type      Type of event to listen for or '*' for all events
     * @param  {Function} handler   Function to call in response
     */
    on: (type, handler) => {
      if (!handler) {
        const err = new ReferenceError('handler not defined.');
        throw err;
      }
      listType(type).push(handler);
    },
    /**
     * Remove an event handler
     * @method on
     * @param  {String}   type      Type of event to remove for or '*' for all events
     * @param  {Function} handler   Handler function to remove
     */
    off: (type, handler) => {
      if (!handler) {
        var err = new ReferenceError(
          'handler not defined. if you wish to remove all handlers from the event please pass "*" as the handler'
        );
        throw err;
      }
      if (handler === '*') {
        removeType(type);
        return;
      }
      let e = listType(type), i = e.indexOf(handler);
      if (~i) e.splice(i, 1);
      if (!e.length) removeType(type);
    },
    /**
     * Invoke all handlers for the given type
     * @method trigger
     * @param  {String}  type     The event to Invoke
     * @param  {Any}    ...args   As many things as you want to pass to the handlers
     */
    trigger: (type, ...args) => {
      listType('*')
        .concat(listType(type))
        .forEach(handler => handler.call(null, ...args));
    }
  };
})();
export { pub as default };
