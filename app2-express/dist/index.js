"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json()); // Here we are exporting the app object for testing 
const zod_1 = require("zod");
const sumInput = zod_1.z.object({
    a: zod_1.z.number(),
    b: zod_1.z.number(),
});
exports.app.post("/sum", (req, res) => {
    const parsedData = sumInput.safeParse(req.body);
    if (!parsedData.success) {
        res.status(411).json({
            "error": "Inputs are invalid"
        });
        return;
    }
    const a = parsedData.data.a;
    const b = parsedData.data.b;
    res.json({
        "sum": a + b
    });
});
// We will not run the app directly, we will run the app in the test file
