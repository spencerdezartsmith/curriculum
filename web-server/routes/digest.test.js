'use strict'

describe('/digest.json', function(){

  beforeEach(function(done){
    this.webServer = createWebserverAgent()
    this.webServer.loginAsLearner(done)
  })

  it('should return the digest as a json object', function(done){
    this.webServer
      .get('/digest.json')
      .end(function(error, response){
        if (error) return done(error)
        done()
      })
  })
})