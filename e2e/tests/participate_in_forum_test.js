Feature('Participate In Forum Test')

const expect = require('expect')

let thread;

Before(async (I) => {
  I.amPreparingDatabase()
})

Scenario('an unauthenticated user may not post a reply', async (I) => {
  I.signIn()
  thread = await I.have('thread')
  I.signOut()
  let reply = await I.have('reply', { thread_id: 1 })
  expect(reply.exception).toBe('Symfony\\Component\\HttpKernel\\Exception\\UnauthorizedHttpException')
})

Scenario('an authenticated user may participate in forum threads', async (I) => {
  I.signIn()
  thread = await I.have('thread')
  let reply = await I.have('reply', { thread_id: thread.id })
  I.amOnPage(`#!/threads/${thread.id}`)
  I.waitForVisible('.thread', 5)
  I.see(thread.body)
  I.see(reply.body)
})