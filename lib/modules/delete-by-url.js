const axios = require('axios');

async function deleteByUrl(fileUrl, clientId, clientSecret, streambyApi) {
  try {
    const { data: response } = await axios.delete(`${streambyApi}/subscriber/file/delete`, {
      clientId,
      clientSecret,
      fileUrl,
    });

    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = { deleteByUrl };