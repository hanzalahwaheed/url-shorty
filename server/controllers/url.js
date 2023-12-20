import { nanoid } from "nanoid";
import Url from "../models/url.js";

export const generateShortUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json("No url found");

  const tempId = nanoid(8);

  await Url.create({
    shortId: tempId,
    reDirectUrl: body.url,
    visitHistory: [],
  });

  return res.json({ id: tempId });
};

export const getShortUrl = async (req, res) => {
  const { shortId } = req.params;
  const entry = await Url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );

  console.log("shortId", shortId);
  console.log("entry", entry);

  res.redirect(entry.reDirectUrl);
};
