let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

//Assertion Style
chai.should();

chai.use(chaiHttp);


describe("Auth", () => {
    it("It should Post all the tasks", (done) => {
        chai.request(browser.options.baseUrl)
            .post("/Token")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.length.should.be.eq(3);
            done();
            });
    });


});
