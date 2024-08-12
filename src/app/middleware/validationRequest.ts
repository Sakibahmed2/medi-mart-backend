import { AnyZodObject } from "zod";
import asyncHandler from "../utils/asyncHandler";

const validationRequest = (schema: AnyZodObject) => {
  return asyncHandler(async (req, res) => {
    await schema.parseAsync({
      body: req.body,
    });
  });
};

export default validationRequest;
