const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

const ideaRoute = require("./routers/idea.routes");
app.use("/api/v1", ideaRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})