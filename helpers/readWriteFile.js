const fs = require('fs').promises;

const readFile = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');

    return JSON.parse(content);
  } catch (error) {
    console.log(error.message);
  }
};

const writeFile = async (path, content) => {
  try {
    const arrayContent = await readFile(path) || [];

    arrayContent.push(content);
    await fs.writeFile(path, JSON.stringify(arrayContent));

    return content;
  } catch (error) {
    console.log(error.message);
  }
};

const removeFileContent = async (path, content) => {
  try {
    await fs.writeFile(path, JSON.stringify(content));
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  readFile,
  writeFile,
  removeFileContent,
};
