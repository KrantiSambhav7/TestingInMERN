import {describe, expect, test, it} from '@jest/globals';
import request from "supertest"; // This will mock a request to the app and not actually start a server
import { app } from "../index"

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
});
