const fastify = require("fastify")({
  logger: true,
});

//fastify.register(require("@fastify/formbody"));

const routes = require("./routes");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:7ALqepKHjOCgzs9o@cluster0.c07xxyr.mongodb.net/kps?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

routes.forEach((route) => {
  fastify.route(route);
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

export default async function handler(req, res) {
  await fastify.ready();
  fastify.server.emit("request", req, res);
}
