import { createServer } from "node:http";

const PORT = parseInt(process.env.PORT || "8080", 10);

const server = createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello from Konflux!", status: "ok" }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on 0.0.0.0:${PORT}`);
});

