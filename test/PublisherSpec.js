/**
 * rkgttr-publisher
 *
 * Copyright © 2016 Erik Guittiere. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import { expect } from 'chai';
import Publisher from '../src/index';
describe('Publisher', () => {
  describe('on()', () => {
    it('should be a function', () => {
      expect(Publisher).to.have.property('on').that.is.a('function');
    });
    it('should register handlers', () => {
      let o = {n:0, b:'hi'},
      foo = (n, b) => {
        o.n = n;
        o.b = b;
      },
      bar = (n, b) => {
        o.n += n;
        o.b = b;
      };
      Publisher.on('event', foo);
      Publisher.on('event', bar);
      Publisher.trigger('event', 2, 'hello');
      expect(o.n).to.be.equal(4);
      expect(o.b).to.be.equal('hello');

    });
  });
  describe('off()', () => {
    it('should be a function', () => {
      expect(Publisher).to.have.property('off').that.is.a('function');
    });
    it('should remove handlers', () => {
      let o = {n:0, b:'hi'},
      foo = (n, b) => {
        o.n = n;
        o.b = b;
      };
      Publisher.on('event', foo);
      Publisher.off('event', foo);
      Publisher.trigger('event', 2, 'hello');
      expect(o.n).to.be.equal(0);
      expect(o.b).to.be.equal('hi');

    });
    it('should remove all handlers when second argument is wild card', () => {
      let o = {n:0, b:'hi'},
      foo = (n, b) => {
        o.n = n;
        o.b = b;
      },
      bar = (n, b) => {
        o.n = n;
        o.b = b;
      };
      Publisher.on('event', foo);
      Publisher.on('event', bar);
      Publisher.off('event', '*');
      Publisher.trigger('event', 2, 'hello');
      expect(o.n).to.be.equal(0);
      expect(o.b).to.be.equal('hi');

    });

  });
  describe('trigger()', () => {
    it('should be a function', () => {
      expect(Publisher).to.have.property('trigger').that.is.a('function');
    });
    it('should execute handler when triggering events', () => {
      let o = {n:0, b:'hi'},
      foo = (n, b) => {
        o.n = n;
        o.b = b;
      };
      Publisher.on('event', foo);
      Publisher.trigger('event', 2, 'hello');
      expect(o.n).to.be.equal(2);
      expect(o.b).to.be.equal('hello');

    });
    it('should execute anonymous (*) registered handlers when triggering events', () => {
      let o = {n:0, b:'hi'},
      foo = (n, b) => {
        o.n = n;
        o.b = b;
      };
      Publisher.on('*', foo);
      Publisher.trigger('event', 3, 'bonjour');
      expect(o.n).to.be.equal(3);
      expect(o.b).to.be.equal('bonjour');

    });
  });
});
