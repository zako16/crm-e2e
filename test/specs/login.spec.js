const LoginPage = require('./../pageobjects/Login.po');
const params = require('../../test_params.json');

describe('Login test suit', function(){
    
    it('should login as admin', function(){
        LoginPage.open();
        LoginPage.doLogin(params.userCreds.login, params.userCreds.password);
    });
});