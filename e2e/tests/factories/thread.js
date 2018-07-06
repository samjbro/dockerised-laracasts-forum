var Factory = require('rosie').Factory;
var faker = require('faker');

module.exports = new Factory()
  .attr('title', () => faker.lorem.sentence())
  .attr('body', () => faker.lorem.paragraph());