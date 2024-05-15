const axios = require('axios');

async function createSignedUrl(fileData, clientId, clientSecret, streambyApi) {
  try {
    const { data: response } = await axios.post(`${streambyApi}/subscriber/file/create-signed-url`, {
      clientId,
      clientSecret,
      mimetype: fileData.mimetype,
    });

    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = { createSignedUrl };