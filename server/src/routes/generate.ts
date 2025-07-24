import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import tokenize from '../tokenizer/Tokenizer';
const prompts = require("../test/prompts.json");

const generateRouter = express.Router();

generateRouter.get("/generate", (req: Request, res: Response) => {
  const { prompt } = req.query;
  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "Invalid or missing prompt" });
  }
  const tokens = tokenize(prompt);
  testPrompts(prompts.prompts);

  res.status(200).json({ prompt, tokens });
});

const testPrompts = (prompts: string[]): void => {
  let resp: string[][] = [];
  for (let prompt of prompts) {
    resp.push(tokenize(prompt));
  }
  console.log(resp);
  const csvContent = resp
    .map((row) => row.map((item) => `"${item.replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const filePath = path.resolve(__dirname, "output2.csv");
  fs.writeFile(filePath, csvContent, (err) => {
    if (err) {
      console.error("Error writing CSV file:", err);
    } else {
      console.log(`CSV file written successfully to ${filePath}`);
    }
  });
};

export default generateRouter;
