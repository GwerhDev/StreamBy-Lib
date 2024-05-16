const axios = require('axios');

async function deleteByUrl(fileUrl, clientId, clientSecret, streambyApi) {
  try {
    const { data: response } = await axios.delete(`${streambyApi}/subscriber/file/delete-by-url`, {
      data: {
        clientId,
        clientSecret,
        fileUrl,
      }
    },
    {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = { deleteByUrl };