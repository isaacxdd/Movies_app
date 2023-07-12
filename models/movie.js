const mongoose = require('./connection');

const movieSchema = new mongoose.Schema({

    title:String,
    releasteDate:String,
    Director:String,
    type:String,
    rating:Number,
    image:String
})

const dataModel = mongoose.model('movie', movieSchema);

module.exports = dataModel;