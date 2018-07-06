var Factory = require('rosie').Factory;
var faker = require('faker');

module.exports = new Factory()
  // .attr('thread_id', () => faker.random.number())
  .attr('body', () => faker.lorem.paragraph());