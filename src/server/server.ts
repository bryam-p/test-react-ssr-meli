import express from "express";
import reactConector from "./config/reactConector";
import search from "./api/search/routes";
import items from "./api/items/routes";

const server = express();

server.use("/api/items", items);
server.use("/api/items", search);
server.use(reactConector);

server.listen(8000, () => {
  console.log(`Server running on http://localhost:8000`);
});
