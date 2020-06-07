const { Player } = require('../models/player.model');

module.exports.index = (req, res) => {
  res.json({
    message: 'Team Manager Index'
  });
}

module.exports.createPlayer = (req, res) => {
  const {name,position} = req.body;

  Player.create({
    name,
    position
  })
  .then(player => res.json(player))
  .catch(err => res.status(400).json(err));
}


module.exports.getAll =(req, res) => {
  Player.find({})
  .then(players =>res.json(players))
  .catch( err => res.json(err))
}


module.exports.getOne = (req, res) => {
  Player.findOne({_id:req.params.id})
  .then(player => res.json(player))
  .catch( err => res.json(err))
}

module.exports.updatePlayer = (req,res) => {
  Player.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
  .then(() => res.json({status:"success"}))
  .catch(err => res.json(err))
}

module.exports.deletePlayer = (req, res) => {
  Player.findOneAndDelete({_id:req.params.id})
  .then(deleted => res.json(deleted))
  .catch(err => res.json(err))
}