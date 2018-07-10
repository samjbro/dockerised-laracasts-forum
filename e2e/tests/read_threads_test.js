const Helpers = require('./helpers')
Feature('Read Threads Test')
//
// Before((I) => {
//   I.sendPostRequest('/data', { 'seed': true })
// })
//
// Scenario('a user can browse threads', (I) => {
//   I.amOnPage('#!/threads')
//   I.waitForVisible('.threads', 30)
//   I.seeElement('.thread-item__attribute--title')
//   I.seeElement('.thread-item__attribute--body')
// })
//
// Scenario('a user can browse an individual thread', (I) => {
//   let threadId = 1
//   I.amOnPage(`#!/threads/${threadId}`)
//   I.waitForVisible('.thread', 30)
//   I.seeElement('.thread-item__attribute--title')
//   I.seeElement('.thread-item__attribute--body')
// })
//
// Scenario('a user can read replies that are associated with a thread', (I) => {
//   let threadId = 1
//   I.amOnPage(`#!/threads/${threadId}`)
//   I.waitForVisible('.thread', 30)
//   I.seeElement('.reply-item__attribute--body')
// })