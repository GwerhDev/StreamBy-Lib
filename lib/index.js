const { uploadFile } = require('./modules/file-upload');

class Streamby {
  constructor() {
    this.streambyApi = 'https://streamby-api.vercel.app';
  }

  async upload(payload) {
    const { 
      file, 
      clientId, 
      clientSecret,
    } = payload;
    
    return await uploadFile(file, clientId, clientSecret, this.streambyApi);
  }
}

module.exports = Streamby;