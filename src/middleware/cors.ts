import { Request, Response } from 'express';

const corsMiddleware = (req: Request, res: Response, next: any) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
};

export default corsMiddleware;
