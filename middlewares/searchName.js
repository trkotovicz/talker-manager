const { readFile } = require('../helpers/readWriteFile');

const PATH = 'talker.json';

async function searchName(req, res) {
  const { q } = req.query;
  const talkers = await readFile(PATH);

  if (!q) return res.status(200).json(talkers);
  
  const searchTalker = talkers.filter((talker) => talker.name.includes(q));

  return res.status(200).json(searchTalker);
}

module.exports = searchName;