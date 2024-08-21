const fastify = require("fastify")({
  logger: true,
});

const routes = require("./routes");

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:7ALqepKHjOCgzs9o@cluster0.c07xxyr.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

routes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info("Server is running at 3000");
  } catch (error) {
    fastify.log.error("Error running fastify server");
  }
};
start();
