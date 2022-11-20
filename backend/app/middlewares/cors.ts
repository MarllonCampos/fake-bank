import { NextFunction, Request, Response } from "express";

export default (req: Request, response: Response, next: NextFunction) => {
  console.log('PASSOU NO CORS')
  response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173/');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Max-Age', '10');
  next();
};