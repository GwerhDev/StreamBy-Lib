import axios from 'axios';

interface FileData {
  buffer: Buffer;
  mimetype: string;
  originalname: string;
}

export class Streamby {
  private streambyUrl: string;

  constructor() {
    this.streambyUrl = 'https://streamby-api.vercel.app';
  }

  public async upload(file: FileData, clientId: string, clientSecret: string): Promise<string> {
    try {
      const { data: response } = await axios.post(`${this.streambyUrl}/admin/f/create-url`, {
        clientId,
        clientSecret,
        mimetype: file.mimetype,
        originalname: file.originalname,
      });

      await axios.put(response.url, file.buffer, {
        headers: {
          "Content-Type": file.mimetype,
        },
      });

      return response.path;
    } catch (error) {
      throw error;
    }
  }
}
