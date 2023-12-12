import { getAllBooks } from '../src/controllers/bookController';

describe('getAllBooks', () => {
  it('should respond with a list of books', () => {
    const mockResponse: any = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
    };

    getAllBooks(mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          title: expect.any(String),
          author: expect.any(String),
          id: expect.any(Number),
        }),
      ])
    );

    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });
});
