// pages/api/submitContent.js

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { content } = req.body;

  try {
    // Read the existing data from data.js
    const filePath = path.join(process.cwd(), 'utils', 'data.js');
    const existingData = require(filePath);

    // Assuming that the data.js contains an array called "dataArray"
    if (Array.isArray(existingData.services)) {
      // Append the new content to the existing array
      existingData.services.push(content);

      // Write the updated data back to the file
      fs.writeFileSync(
        filePath,
        `module.exports = ${JSON.stringify(existingData, null, 2)};`
      );

      return res.status(200).json({ success: true });
    }

    return res.status(500).json({ error: 'Data format is not as expected' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to submit content' });
  }
}
