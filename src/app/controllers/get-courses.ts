import { Request, Response } from 'express';

export const getCoursesController = (_: Request, res: Response) => {
  res.json(['Advanced Angular Forms', 'Conscious Angular Testing']);
};
