import { Server } from "hyper-express";
import * as process from "process";

const webserver = new Server();

webserver.get("/", (request, response) => {
  response.send("Hello World");
});

async function start({ port }: { port: number }) {
  try {
    const socket = await webserver.listen(port);
  } catch (error) {
    console.log(`Failed to start webserver on port ${port}`, { error });

    process.exit(1);
  }

  console.log(`Webserver started on http://localhost:${port}/`);
}

start({ port: 8080 });
