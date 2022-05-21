const LoginPage = require('./../pageobjects/Login.po');
const ClientPage = require('./../pageobjects/Client.po')

describe('Clients page', function(){
    beforeEach(function(){
        LoginPage.open();
        LoginPage.doLogin("Admin", "Admin@Navi")
    })

    afterEach(function(){
        browser.reloadSession();
    })

    it('should add client', function(){
        ClientPage.clickOnAddClientButton();
        browser.pause(5000);
    })

    it('should open first client', function(){
        ClientPage.clickOnFirstRow();
        browser.pause(5000);
    })
})