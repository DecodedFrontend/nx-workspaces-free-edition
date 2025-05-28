import { Request, Response } from 'express';
import { getCoursesController } from './get-courses';
describe('GetCourses Controller', () => {
  it('should call response.json() method with any array', () => {
    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;

    getCoursesController({} as Request, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith(expect.any(Array));
  });
});
