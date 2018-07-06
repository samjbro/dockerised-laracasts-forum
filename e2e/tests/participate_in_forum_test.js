Feature('Participate In Forum Test')

Before((I) => {
})

Scenario('an authenticated user may participate in forum threads', async (I) => {
  I.amPreparingDatabase()
  I.signIn()
  let thread = await I.have('thread')
  let reply = await I.have('reply', { thread_id: thread.id })
  I.amOnPage(`#!/threads/${thread.id}`)
  I.waitForVisible('.thread', 5)
  I.see(thread.body)
  I.see(reply.body)
})