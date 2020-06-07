const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Please provide a name!'
        ],
        minlength: [ 
            3, 
            'Please provide a name atleast 3 characters!'

        ]
    },
    position: {
        type: String,
        required: [
            true,
            'Please provide a position!'
        ]
    }
    
}, { timestamps: true });

module.exports.Player = mongoose.model('Player', PlayerSchema);