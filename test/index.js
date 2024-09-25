//const routes = require("./routes");
const mongoose = require("mongoose");

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const fastify = Fastify({
  logger: true,
});

mongoose
  .connect(
    "mongodb+srv://admin:7ALqepKHjOCgzs9o@cluster0.c07xxyr.mongodb.net/kps?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

async function registerRoutes(fastify) {
  fastify.addContentTypeParser("application/json", {}, (req, payload, done) => {
    req.rawBody = payload.rawBody;

    done(null, payload.body);
  });

  fastify.get("/", async (request, reply) => {
    reply.send({ message: "Hello World! 5555" });
  });
}

const fastifyApp = async (request, reply) => {
  await registerRoutes(fastify);
  await fastify.ready();
  fastify.server.emit("request", request, reply);
};
exports.helloWorld = onRequest(fastifyApp);
