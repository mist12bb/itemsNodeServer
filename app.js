const fastify = require("fastify")(
  {logger: true}
);
const routers = require("./routes/items.router")
const mongoos = require("mongoose");

mongoos.connect("mongodb://localhost:27017").then(()=>{
  console.log("Mongodb connected...");
  
}
).catch(err=> {
  console.log(err);
}
)
fastify.get("/", async (req, rep)=>{
  return {hello: "world"}
})
routers.forEach((route, i)=>{
  fastify.route(route);
})
const start = async () => {
  try {
    await fastify.listen(4000);
    fastify.log.info(fastify.server.address());
  }catch (err){
    fastify.log.error(err);
    process.exit(1)
    
  }
}

start();
