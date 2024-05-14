import axios from 'axios';
import { Streamby } from '..';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Streamby', () => {
  it('should upload a file and return the file path', async () => {
    const file = {
      mimetype: 'audio/mpeg',
      originalname: 'audio.mp3',
      buffer: Buffer.from('test')
    };

    const responseData = {
      url: 'https://fake-s3-url.com',
      path: 'audio/audio.mp3'
    };

    mockedAxios.post.mockResolvedValue({ data: responseData });
    mockedAxios.put.mockResolvedValue({ data: {} });

    const streamby = new Streamby({
      streambyUrl: 'https://your-streamby-url',
      clientId: 'your-client-id',
      clientSecret: 'your-client-secret',
    });

    const result = await streamby.upload(file);
    expect(result).toBe('audio/audio.mp3');
  });
});
