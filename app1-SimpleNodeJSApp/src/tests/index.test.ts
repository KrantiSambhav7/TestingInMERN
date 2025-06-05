import { add } from "../index";
import { describe, test, expect } from "@jest/globals";

// describe is a function that takes two arguments: a string and a function
// the string is the name of the module we are testing
// the function is a function that contains the tests we want to run
// test is a function that takes two arguments: a string and a function
// the string is the name of the test we are running
// the function is a function that contains the code we want to test

// npm run test will run the tests in the test folder
// One describe block can contain multiple describe blocks 
describe("addModule", () => { // This will test the add module
    test("should return the sum of two numbers", () => {
        expect(add(1, 2)).toBe(3);
    }); 
    test("should return the sum of two numbers", () => {
        expect(add(1, 2)).toBe(3);
    }); 
    test("should return the sum of two numbers", () => {
        expect(add(1, 2)).toBe(3);
    }); 
});  


