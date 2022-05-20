import express from "express";
import { findByQuery } from "./controller";

const router = express.Router();

router.get("/", async (req, res) => {
  const params = req.query.q ? req.query.q : "";
  const data = await findByQuery(String(params));
  if (params) {
    res.status(200).send(data);
  }
});

export default router;
