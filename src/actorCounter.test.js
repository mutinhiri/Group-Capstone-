import actorCounter from './actorCounter.js';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p id="actor-count">Actor Counter</p>');
global.document = dom.window.document;

test('Update counter', () => {
  const mockList = [1, 2, 3, 4];
  const counter = document.getElementById('actor-count');
  actorCounter(mockList);
  expect(counter.innerHTML).toBe('Actor Count (4)');
});