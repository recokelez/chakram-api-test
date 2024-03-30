const chakram = require('chakram'),
    expect = chakram.expect;

describe("User Tests", function () {

    it("GET /v2/user/{userName}", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/testqa1234");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("GET /v2/user/logout", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/logout");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("GET /v2/user/login", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/login?username=test&password=123");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("POST /v2/user userCreate", function () {
        const data = {
            "id": 231213123321,
            "username": "testcan123",
            "firstName": "test",
            "lastName": "can",
            "email": "test@can.com",
            "password": "123",
            "phone": "213123321231",
            "userStatus": 0
          };

          const resData = {
            "code": 200,
            "type": "unknown",
            "message": "231213123321"
          };

        const response = chakram.post("https://petstore.swagger.io/v2/user", data);
        
        return response.then(function (res){
            // console.log(res.body);
            expect(res).to.have.status(200);
            expect(res).to.have.json(resData);
        })
    });

    it("PUT /v2/user userUpdate", function () {
        const data = {
            "id": 123321231132231,
            "username": "teset",
            "firstName": "test",
            "lastName": "ste",
            "email": "2312321@test.com",
            "password": "123",
            "phone": "34432342342",
            "userStatus": 0
          };

        const response = chakram.put("https://petstore.swagger.io/v2/user/testcan123", data);
        
        return response.then(function (res){
            // console.log(res.body);
            expect(res).to.have.status(200);
        })
    });

    it("DELETE /v2/user/{username}", function () {
        const response = chakram.delete("https://petstore.swagger.io/v2/user/testcan123");
        expect(response).to.have.status(200);
        return chakram.wait();
    });


});