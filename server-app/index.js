const express = require("express"); // Express module to create a server application
const cors = require("cors"); // Cors module to handle Preflight requests
const bodyParser = require("body-parser"); // Body-parser module to parse JSON objects

const app = express(); // instance of an Express object
const port = 5000; // the port the server will be listening on
const textBodyParser = bodyParser.text({
    limit: "20Mb",
    defaultCharset: "utf-8",
});

const { getRandomInt, spingRoulete } = require("./modules/utility.js");

app.use(
    cors({
        origin: "http://localhost:3000", // enable CORS for localhost:3000
    })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Solicitud previa
app.options("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "task"); // Allow the 'task 'header
    res.header("Access-Control-Allow-Methods", "GET"); // Allow the GET method
    res.header("Access-Control-Allow-Methods", "POST"); // Allow the POST method
    res.sendStatus(200);
});

app.get("/", textBodyParser, async function (req, res) {
    console.log("req.headers: ", req.query.bet); //print the HTTP Request Headers

    let data;
    let number;
    switch (req.headers["task"]) {
        case "play":
            number = getRandomInt();
            data = spingRoulete(number);
            break;
        default:
            null;
            break;
    }
    //res.send({ response });
    res.status(200).json({ data });
    res.end();
});

//Initialize the Server, and Listen to connection requests
app.listen(port, (err) => {
    if (err) {
        console.log("There was a problem ", err);
    }
    console.log(`Server listening on http://localhost:${port}`);
});
