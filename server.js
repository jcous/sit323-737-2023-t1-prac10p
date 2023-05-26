const express = require("express");
const app = express();
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "calcMicroFile.log" }),
  ],
});

app.use(express.json());
//addition endpoint
app.get("/add", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) && isNaN(num2)) {
    res.status(400).json({ error: "Both input parameters are invalid" });
    logger.error("Both input parameters are invalid");
  } else if (isNaN(num1)) {
    res.status(400).json({ error: "num1 is invalid" });
    logger.error("num1 is invalid");
  } else if (isNaN(num2)) {
    res.status(400).json({ error: "num2 is invalid" });
    logger.error("num2 is invalid");
  } else {
    const result = num1 + num2;
    res.json({ result: result });
    logger.result;
  }
});
//subtract endpoint
app.get("/subtract", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) && isNaN(num2)) {
    res.status(400).json({ error: "Both input parameters are invalid" });
    logger.error("Both input parameters are invalid");
  } else if (isNaN(num1)) {
    res.status(400).json({ error: "num1 is invalid" });
    logger.error("num1 is invalid");
  } else if (isNaN(num2)) {
    res.status(400).json({ error: "num2 is invalid" });
    logger.error("num2 is invalid");
  } else {
    const result = num1 - num2;
    res.json({ result: result });
  }
});
//multiply endpoint
app.get("/multiply", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) && isNaN(num2)) {
    res.status(400).json({ error: "Both input parameters are invalid" });
    logger.error("Both input parameters are invalid");
  } else if (isNaN(num1)) {
    res.status(400).json({ error: "num1 is invalid" });
    logger.error("num1 is invalid");
  } else if (isNaN(num2)) {
    res.status(400).json({ error: "num2 is invalid" });
    logger.error("num2 is invalid");
  } else {
    const result = num1 * num2;
    res.json({ result: result });
  }
});
//division endpoint
app.get("/division", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) && isNaN(num2)) {
    res.status(400).json({ error: "Both input parameters are invalid" });
    logger.error("Both input parameters are invalid");
  } else if (isNaN(num1)) {
    res.status(400).json({ error: "num1 is invalid" });
    logger.error("num1 is invalid");
  } else if (isNaN(num2)) {
    res.status(400).json({ error: "num2 is invalid" });
    logger.error("num2 is invalid");

    //check if num2 equal 0
  } else if (num2 === 0) {
    res.status(400).json({ error: "Cannot divide by zero" });
    logger.error("Cannot divide by zero");
  } else {
    const result = num1 / num2;
    res.json({ result: result });
  }
});

app.listen(3000, () => {
  logger.info("Calculator microservice listening on port 3000");
});
