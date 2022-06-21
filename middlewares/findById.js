const { readFile } = require('../helpers/readWriteFile');

const PATH = './talker.json';

async function findById(req, res) {
  const { id } = req.params;
  const talkers = await readFile(PATH);

  const talkerId = talkers.find((talker) => talker.id === Number(id));

  if (!talkerId) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(talkerId);
}

module.exports = findById;
