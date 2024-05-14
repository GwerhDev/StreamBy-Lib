const axios = require('axios');
const Streamby = require('../');

jest.mock('axios');

describe('Streamby', () => {
  it('should upload a file and return the file path', async () => {
    const mockUrl = 'https://mockurl.com/upload';
    const mockPath = '/uploads/mockfile.mp3';

    axios.post.mockResolvedValue({
      data: {
        url: mockUrl,
        path: mockPath
      }
    });

    axios.put.mockResolvedValue({ status: 200 });

    const streamby = new Streamby();
    const file = {
      buffer: Buffer.from('test file'),
      mimetype: 'audio/mpeg',
      originalname: 'testfile.mp3'
    };

    const clientId = 'testClientId';
    const clientSecret = 'testClientSecret';

    const result = await streamby.upload({ file, clientId, clientSecret });

    expect(result).toBe(mockPath);
    expect(axios.post).toHaveBeenCalledWith('https://streamby-api.vercel.app/admin/f/create-url', {
      clientId,
      clientSecret,
      mimetype: file.mimetype,
    });
    expect(axios.put).toHaveBeenCalledWith(mockUrl, file, {
      headers: {
        "Content-Type": file.mimetype
      }
    });
  });
});
