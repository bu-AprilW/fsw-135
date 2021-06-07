const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Hello April!");
});

app.listen(3000, () => {
    console.log("The App is listening on port 3000.")
});