
import express from "express";
import { z } from "zod";
import {prisma} from "./db"

// Whatever we want to mock out is present in a separate file 
export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", async (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body)
    if (!parsedResponse.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return;
    }
    const answer = parsedResponse.data.a + parsedResponse.data.b;

    await prisma.sum.create({ // We have to mock this req 
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })

    res.json({
        "sum" : answer
    })
});

app.get("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    if (!parsedResponse.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return;
    }
    const answer = parsedResponse.data.a + parsedResponse.data.b;
    res.json({
        "sum" : answer
    })
});