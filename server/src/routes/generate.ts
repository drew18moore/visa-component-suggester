import express, { Request, Response } from "express";
import parse from "../parser/Parser";
import generateCode from "../codeGenerator/CodeGenerator";

const generateRouter = express.Router();

generateRouter.get("/generate", (req: Request, res: Response) => {
  const { prompt } = req.query;
  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "Invalid or missing prompt" });
  }

  /* 
  ALGORITHM:
  - PARSE PROMPT:
    - GET COMPONENT_TYPE
    - GET PROPERTIES
  - CREATE MAP FROM COMPONENT_TYPE KEYWORD TO A FUNCTION
  - CREATE MAP FROM PROPERTIES KEYWORDS TO A FUNCTION
  - CREATE PREFAB FUNCTION:
    - PREFAB FUNCTION WILL ACCEPT ARGUMENTS FOR PROPERTIES
    - MAP PROPERTIES TO THEIR FUNCTION AND INSERT INTO PREFAB BETWEEN CUSTOM DELIMITERS
    - RETURNS STRINGIFIED COMPONENT
  - SEND STRING TO FRONT-END
  */

  const parsed = parse(prompt)
  const code = generateCode(parsed)

  res.status(200).json({ prompt, parsed, code });
});

export default generateRouter;
