const { createSignedUrl } = require('./modules/create-signed-url');
const { deleteByUrl } = require('./modules/delete-by-url');

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

  async deleteFile(payload) {
    const {
      fileUrl,
      clientId,
      clientSecret
    } = payload;

    return deleteByUrl(fileUrl, clientId, clientSecret, this.streambyApi);
  }
}

module.exports = Streamby;