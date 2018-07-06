// const localStore = require('local-storage')

module.exports = {
  createThread (I, values = {}) {
    let defaults = {
      title: 'Test Thread',
      body: 'This is a test thread.'
    }
// For some reason this isn't giving me a proper response readout - it's just dumping the laravel application.php
// page. That means it must be reaching the api,
    I.sendPostRequest('/thread', {
      title: values.title || defaults.title,
      body: values.body || defaults.body
    }).then(response => {
      console.log(response)
      // console.log(response.request.headers)
      // console.log(response.statusCode)
      // console.log(response.statusMessage)
    })
  },

  postReply (I, values = {}) {
    let defaults = {
      thread_id: 1,
      body: 'This is a test reply'
    }
    I.sendPostRequest(`threads/${values.thread_id || defaults.thread_id}/replies`, {
      body: values.body || defaults.body
    })
  }
}