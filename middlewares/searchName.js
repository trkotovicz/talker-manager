const { readFile } = require('../helpers/readWriteFile');

const PATH = 'talker.json';

async function searchName(req, res) {
  const { query } = req.query;
  const talkers = await readFile(PATH);

  if (!query) return res.status(200).json(talkers);
  
  const searchTalker = talkers.filter((talker) => talker.name.includes(query));

  return res.status(200).json(searchTalker);
}

module.exports = searchName;