import axios from 'axios';

interface StreambyConfig {
  streambyUrl: string;
  clientId: string;
  clientSecret: string;
}

interface FileData {
  mimetype: string;
  originalname: string;
  buffer: Buffer;
}

export class Streamby {
  private config: StreambyConfig;

  constructor(config: StreambyConfig) {
    this.config = config;
  }

  public async upload(file: FileData): Promise<string> {
    try {
      const { data: response } = await axios.post(`${this.config.streambyUrl}/admin/f/create-url`, {
        clientId: this.config.clientId,
        clientSecret: this.config.clientSecret,
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
