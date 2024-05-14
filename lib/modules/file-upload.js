const axios = require('axios');

async function uploadFile(file, clientId, clientSecret, streambyApi) {
  try {
    const { data: response } = await axios.post(`${streambyApi}/admin/f/create-url`, {
      clientId,
      clientSecret,
      mimetype: file.mimetype,
    });

    await axios.put(response.url, file, {
      headers: {
        "Content-Type": file.mimetype,
      },
    });

    return response.path;
  } catch (error) {
    throw error;
  }
}

module.exports = { uploadFile };