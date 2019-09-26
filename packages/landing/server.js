const express = require("express");
const next = require("next");
const proxy = require("http-proxy-middleware");
const twilio = require("twilio");
var bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV === "development";
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();
  server.use(bodyParser.json());
  server.use(
    "/forms",
    proxy({ target: "https://api.typeform.com", changeOrigin: true })
  );

  // CORS middleware
  server.use(function(req, res, next) {
    // Allow Origins
    res.header("Access-Control-Allow-Origin", "*");
    // Allow Methods
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    // Allow Headers
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, Authorization"
    );
    // Handle preflight, it must return 200
    if (req.method === "OPTIONS") {
      // Stop the middleware chain
      return res.status(200).end();
    }
    // Next middleware
    next();
  });

  server.post("/message", function(req, res) {
    var accountSid = "AC7f162f90e244104ae724320e6ded542b";
    var authToken = "16568b13ba101b4fbaefcb857b1a1384";
    var client = new twilio(accountSid, authToken);

    var { body, to, from } = req.body;

    client.messages
      .create({
        body,
        to,
        from,
        provideFeedback: true
      })
      .then(message => res.send(message))
      .catch(error => res.send(error));
  });

  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`);
})();
