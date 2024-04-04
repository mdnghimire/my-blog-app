/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import swaggerUI from "swagger-ui-express";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");
const app = express();
app.use(
  "api/docs",
  swaggerUI.serve,
  swaggerUI.setup(require("./todo-api.json")),
);

// Start the server
// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
