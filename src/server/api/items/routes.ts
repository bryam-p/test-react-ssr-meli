import express from "express";
import { getById } from "./controller";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const data = await getById(String(req.params.id));
  res.send(data);
});

export default router;
