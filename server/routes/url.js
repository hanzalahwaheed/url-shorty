import express from "express";
import { generateShortUrl, getShortUrl } from "../controllers/url.js";
const router = express.Router();

router.get("/", (req, res) => res.json("default get request"));
router.post("/", generateShortUrl);
router.get("/:shortId", getShortUrl);

export default router;
