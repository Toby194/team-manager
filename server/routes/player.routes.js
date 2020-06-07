const PlayerCtl = require('../controllers/player.controller');

module.exports = function(app) {
    app.get('/api',PlayerCtl.index);
    app.post('/api/players', PlayerCtl.createPlayer);
    app.get('/api/players', PlayerCtl.getAll);
    app.get('/api/players/:id', PlayerCtl.getOne);
    app.put('/api/players/:id', PlayerCtl.updatePlayer);
    app.delete('/api/players/:id', PlayerCtl.deletePlayer);
}