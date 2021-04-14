describe('isFromCapeTown' , function(){
    it('Should return true if registration is from Cape town' , function(){
        assert.equal(true, isFromCapeTown('CA 1234'));
    });
    it('Should return false if registration is not from Cape town' , function(){
        assert.equal(false, isFromCapeTown('CJ 1234'));
    });
    it('Should return true if registration is from Cape town' , function(){
        assert.equal(true, isFromCapeTown('CA 2568'));
    });
});
