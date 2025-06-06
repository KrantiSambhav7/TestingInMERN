import {describe, expect, test, it , vi} from 'vitest'; 
import request from "supertest"
import { app } from "../index"

// Vitest is being used here'
// For DB we do not have to migrate the DB but just generate the client
// We write the unit test and assume that the DB will do the things right and hence we mock it 
// In unit test we will not connect to a DB we just fake all the external service like redis etc.
// vitest-mock-extended will mock all the types on itself

vi.mock("../db"); // This will pick up the mock from the __mock__ folder 

describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
        const res = await request(app).post("/sum").send({ // So here we are sending a request to the app and we are sending the body of the request and we have not started the server yet. It mocks the request to the app.
          a: 1,
          b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.sum).toBe(3);
      });

      it("should return the sum of two negative numbers", async () => {
        const res = await request(app).post("/sum").send({
          a: -1,
          b: -2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.sum).toBe(-3);
      });

      it("should return the sum of two zero number", async () => {
        const res = await request(app).post("/sum").send({
          a: 0,
          b: 0
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.sum).toBe(0);
      });

      it("should return the sum of two zero number but I am sending the wrong inputs", async () => {
        const res = await request(app).post("/sum").send({
          a: "1", // This test is added to improve the coverage of the code 
          b: 0
        });
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Incorrect inputs");
      });
});
