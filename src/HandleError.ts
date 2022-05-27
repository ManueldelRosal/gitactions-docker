import { Response } from "express";
export const HandleError = (error, response: Response) => {
  response.status(error.status).json(error);
};
