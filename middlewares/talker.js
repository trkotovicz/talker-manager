const { readFile, writeFile, removeFileContent } = require('../helpers/readWriteFile');
const { nameValidate, ageValidate, talkValidate,
  watchedAtValidate, rateValue } = require('../helpers/validations');

const PATH = 'talker.json';

function talkerValidate(req, res, next) {
  const { name, age, talk } = req.body;

  nameValidate(name, res);
  ageValidate(age, res);
  talkValidate(talk, res);
  watchedAtValidate(talk.watchedAt, res);
  rateValue(talk.rate, res);

  next();
}

async function addTalker(req, res) {
  try {
    const { name, age, talk: { watchedAt, rate } } = req.body;

    const talkers = await readFile(PATH);
  
    const newTalk = {
      name,
      age,
      id: talkers.length + 1,
      talk: { watchedAt, rate },
    };
    await writeFile(PATH, newTalk);
  
    return res.status(201).json(newTalk);
  } catch (error) {
    console.log(error.message);
  }
}

async function editTalker(req, res, next) {
  try {
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const { id } = req.params;

    const talkers = await readFile(PATH);
    const findById = talkers.findIndex((talker) => talker.id === +id);

    const editTalk = { ...talkers[findById], name, age, talk: { watchedAt, rate } };
    await writeFile(PATH, editTalk);

    return res.status(200).json(editTalk);
  } catch (error) {
    console.log(error.message);
  }
  next();
}

async function removeTalker(req, res) {
  try {
    const { id } = req.params;
    const talkers = await readFile(PATH);

    const removeById = talkers.filter((talker) => talker.id !== +id);
    await removeFileContent(PATH, removeById);

    return res.status(204).json(removeById);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { talkerValidate, addTalker, editTalker, removeTalker };