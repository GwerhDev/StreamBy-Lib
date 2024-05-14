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
    const fileData = {
      mimetype: 'audio/mpeg',
      originalname: 'testfile.mp3'
    };

    const clientId = 'testClientId';
    const clientSecret = 'testClientSecret';

    const result = await streamby.getBucket({ fileData, clientId, clientSecret });

    expect(result).toStrictEqual({ path: mockPath, url: mockUrl });
    expect(axios.post).toHaveBeenCalledWith('https://streamby-api.vercel.app/admin/f/create-url', {
      clientId,
      clientSecret,
      mimetype: fileData.mimetype,
    });
  });
});
