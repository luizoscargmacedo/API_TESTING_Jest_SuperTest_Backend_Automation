const request = require("supertest");
const ApiUrl1 = "https://ozzy-api-dev.space.io";

describe("Validate API Service", () => {
// Authentication Request
  it("Authentication Request should return a token", () => {
    return request(ApiUrl1)
      .post("/authentication")
      .send({
          "codigoOrigem": "155",
          "dtNasc": "22/12/1957",
          "origin": "melbourne",
          "senha": "3455577"
      })
      .expect(200)
      .then(response => {
          expect(response.body).toHaveProperty("token");
      });
  });

});