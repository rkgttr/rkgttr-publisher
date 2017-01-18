# [rkgttr-publisher](https://github.com/rkgttr/rkgttr-publisher)

[![NPM version](http://img.shields.io/npm/v/rkgttr-publisher.svg?style=flat-square)](https://www.npmjs.com/package/rkgttr-publisher)
[![NPM downloads](http://img.shields.io/npm/dm/rkgttr-publisher.svg?style=flat-square)](https://www.npmjs.com/package/rkgttr-publisher)
[![Build Status](http://img.shields.io/travis/rkgttr/rkgttr-publisher/master.svg?style=flat-square)](https://travis-ci.org/rkgttr/rkgttr-publisher)
[![Coverage Status](https://img.shields.io/coveralls/rkgttr/rkgttr-publisher.svg?style=flat-square)](https://coveralls.io/rkgttr/rkgttr-publisher)
[![Dependency Status](http://img.shields.io/david/rkgttr/rkgttr-publisher.svg?style=flat-square)](https://david-dm.org/rkgttr/rkgttr-publisher)

> Based on [event-pubsub](https://www.npmjs.com/package/event-pubsub), a custom events publisher.

### How to Install

```sh
$ npm install rkgttr-publisher --save-dev
```
or

```sh
$ yarn add rkgttr-publisher --dev
```

### Getting Started

Publisher static methods

* `on`: will bind the handler function to the the type event. Just like addEventListener in the browser, takes 2 parameters:
    * `type`: a string representing the event.
    * `callback`: a method you want to invoke when this type of event is triggered.
* `off`: will unbind the handler function from the the type event. If the handler is "*", all handlers for the event type will be removed, takes 2 parameters:
    * `type`: a string representing the event.
    * `callback`: a method you want to remove when this type of event is triggered, or `*` if you want to remove all event handlers for this event.
* `trigger`: will call all handler functions bound to the event type and pass all `...data` arguments to those handlers:
    * `type`: a string representing the event.
    * `...data`: Arguments to send when triggering the event.



### License

MIT © 2016 Erik Guittiere
