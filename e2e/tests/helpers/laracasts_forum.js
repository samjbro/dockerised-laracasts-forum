const requireg = require('requireg');
const unirest = requireg('unirest');

class LaracastsForum extends Helper {

  _before() {
    const recorder = require('codeceptjs').recorder
    recorder.retry({
      retries: 30,
      minTimeout: 2000,
      when: err => {
        return err.message.indexOf('Docker not ready') > -1
      }
    })

    this.helpers['ApiDataFactory']._requestCreate = function (factory, data) {
      const method = Object.keys(this.factories[factory].create)[0];
      let url = this.factories[factory].create[method];
// change this to grab interior of '{}'
      url = url.split('$').map(str => data[str] || str).join('')
      const request = unirest[method](this.restHelper._url(url)).type('json').send(data);

      return this.restHelper._executeRequest(request).then((resp) => {
        const id = this._fetchId(resp.body, factory);
        this.created[factory].push(id);
        return resp.body;
      });
    }
  }

  _after() {
    // remove if not used
  }

  signIn () {
    let rest = this.helpers['REST']
    return rest.sendPostRequest('/login', {
      email: 'test@comms-express.com',
      password: 'secret'
    }).then(response => {
      rest.haveRequestHeaders({ Authorization: `Bearer ${response.body.access_token}` })
    })

  }

  amPreparingDatabase (seed = true) {
    let rest = this.helpers['REST']
    return rest.sendPostRequest('/data', {seed}).then(response => {
      if (response.error) {
        throw new Error('Docker not ready')
      }
    })
  }

  createThread (values = {}) {
    let rest = this.helpers['REST']
    let defaults = {
      title: 'Test Thread',
      body: 'This is a test thread.'
    }
    return rest.sendPostRequest('/thread', {
      title: values.title || defaults.title,
      body: values.body || defaults.body
    })
  }

}




module.exports = LaracastsForum;
