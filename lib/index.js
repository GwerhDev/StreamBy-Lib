const { createSignedUrl } = require('./modules/create-signed-url');

class Streamby {
  constructor() {
    this.streambyApi = 'https://streamby-api.vercel.app';
  }

  async getBucket(payload) {
    const { 
      fileData, 
      clientId, 
      clientSecret,
    } = payload;

    return await createSignedUrl(fileData, clientId, clientSecret, this.streambyApi);
  }
}

module.exports = Streamby;