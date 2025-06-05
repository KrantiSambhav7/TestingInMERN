import { app } from "./index";
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
// When we write tests for the app, we will not run the app directly.
