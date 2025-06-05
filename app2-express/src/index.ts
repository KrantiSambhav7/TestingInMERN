import express from "express";
export const app = express();
app.use(express.json()); // Here we are exporting the app object for testing 

app.post("/sum", (req , res) => {
    const a = req.body.a;
    const b = req.body.b;
    res.json({
        "sum": a + b
    })
})
// We will not run the app directly, we will run the app in the test file