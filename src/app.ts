import bodyParser from "body-parser";
import express from "express";
import { AuthenticateFacialImages } from "./Authentication/Authentication";
import { EvaluatePassiveLiveness } from "./Liveness/Liveness";

const app = express();
const port = 3000;
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});

app.post("/api/selphid/passive-liveness/evaluate", EvaluatePassiveLiveness);
app.post("/api/selphid/authenticate-facial/images", AuthenticateFacialImages);
