'use strict'

describe('/phases', function(){

  beforeEach(function(done){
    this.webServer = createWebserverAgent()
    this.webServer.loginAsLearner(done)
  })

  describe('/1', function () {
    it('should render the phase 1 README', function(done){
      this.webServer
        .get('/phases/1')
        .end(function(error, response){
          if (error) return done(error)
          expect(response.text).to.include('Phase 1 is all about the fundamentals')
          done()
        })
    })
  });
})