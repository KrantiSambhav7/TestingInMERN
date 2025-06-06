"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
index_1.app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
// When we write tests for the app, we will not run the app directly.
