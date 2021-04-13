describe('isWeekday Function' , function(){
    it('Should return true if its a  weekdays', function(){
        assert.equal(true,isWeekday('Monday'));
    });
    it('Should return  false if its not a weekdays', function(){
        assert.equal(false,isWeekday('Sunday'));
    });
});