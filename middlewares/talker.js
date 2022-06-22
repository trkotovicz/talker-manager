const { readFile, writeFile } = require('../helpers/readWriteFile');
const { 
  nameValidate,
  ageValidate,
  talkValidate,
  watchedAtValidate,
  rateValue,
} = require('../helpers/validations');

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
      id: talkers.length + 1,
      name,
      age,
      talk: { watchedAt, rate },
    };
    
    await writeFile(PATH, newTalk);
  
    return res.status(201).json(newTalk);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { talkerValidate, addTalker };