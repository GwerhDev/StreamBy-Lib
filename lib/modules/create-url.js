const axios = require('axios');

async function createUrl(fileData, clientId, clientSecret, streambyApi) {
  try {
    const { data: response } = await axios.post(`${streambyApi}/admin/f/create-url`, {
      clientId,
      clientSecret,
      mimetype: fileData.mimetype,
    });

    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = { createUrl };