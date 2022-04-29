import { router } from './routes';

var express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(8080, () => {
  const date = new Date();
  console.log(
    `[${date.toLocaleTimeString("default", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })}] Server is running`
  );
});
