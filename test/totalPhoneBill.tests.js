describe('totalPhoneBill Function' , function(){
    it('Should return the total cost for sms', function(){
        assert.equal('R2.75',totalPhoneBill('call ,sms ,call,sms,sms'));
    });
    it('Should return the total cost for call', function(){
        assert.equal('R9.55',totalPhoneBill('call, sms, call, call, sms'));
    });
    it('Should return the total cost for call and sms', function(){
        assert.equal('R14.25',totalPhoneBill('call, sms, call, sms, sms,call, sms, call, sms, sms'));
    });
 
});
