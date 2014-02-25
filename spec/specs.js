describe('Contact', function() {
  describe('fullName',function() {
    it('combines the first and last name, separated by a space', function() {
      var joshFowler = Object.create(Contact);
      joshFowler.firstName = 'Josh';
      joshFowler.lastName = 'Fowler';
      joshFowler.fullName().should.equal("Josh Fowler");
    });
  }); 
});
