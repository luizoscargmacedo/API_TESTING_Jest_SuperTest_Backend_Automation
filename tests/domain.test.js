const request = require("supertest");
const ApiUrl2 = "https://taz-api-dev.space.io";
const tokenAuth = 'eyHJUBBNN-hj7KNM88';

describe("Validate API Service", () => {
// Domain Request
  it("Domain Request should return a client list", () => {
    return request(ApiUrl2)
      .get("/viewlayer/australia/domains")
      //auth.token = res.body.token;
      .set('Authorization', 'bearer ' + tokenAuth)
      .expect(200)
      .then(response => {
          expect(response.body).toHaveProperty("tazmania clients");
      });
  });

});