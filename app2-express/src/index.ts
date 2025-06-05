import express from "express";
export const app = express();
app.use(express.json()); // Here we are exporting the app object for testing 
import {z} from "zod"

const sumInput = z.object({
    a: z.number(),
    b: z.number(),
})

app.post("/sum", (req , res) => {
    const parsedData = sumInput.safeParse(req.body);
    if(!parsedData.success){
        res.json({
            "Error": "Inputs are invalid"
        });
        return;
    }

    const a = parsedData.data.a;
    const b = parsedData.data.b;
    
    res.json({
        "sum": a + b
    })
})
// We will not run the app directly, we will run the app in the test file