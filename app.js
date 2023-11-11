const express = require('express');
const routes = require("./routes/routes");
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(routes);

app.listen(app.get("port"), () => {
    console.log("Server started on port " + app.get("port"));
    console.log(`[HOST] http://localhost:3000/`);
})