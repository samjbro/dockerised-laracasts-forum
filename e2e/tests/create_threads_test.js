Feature('Create Threads Test')
const expect = require('expect')

Before(async (I) => {
  I.amPreparingDatabase()
})

Scenario('an unauthenticated user cannot create new forum threads', async (I) => {
  let thread = await I.have('thread')
  expect(thread.exception).toBe('Symfony\\Component\\HttpKernel\\Exception\\UnauthorizedHttpException')

})

Scenario('an authenticated user can create new forum threads', async (I) => {
  I.signIn()
  let thread = await I.have('thread')
  I.amOnPage(`#!/threads/${thread.id}`)
  I.waitForVisible('.thread', 30)
  I.see(thread.title)
  I.see(thread.body)
})