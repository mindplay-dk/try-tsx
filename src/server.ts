import { Server } from "hyper-express";
import * as process from "process";

const server = new Server();

server.get("/", (request, response) => {
  response.send("Hello World");
});

start(server, { port: 8080 });

async function start(server: Server, { port }: { port: number }) {
  try {
    const socket = await server.listen(port);
  } catch (error) {
    console.log(`Failed to start webserver on port ${port}`, { error });

    process.exit(1);
  }

  console.log(`Webserver started on http://localhost:${port}/`);
}
