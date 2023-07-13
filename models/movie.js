const mongoose = require('./connection');

const movieSchema = new mongoose.Schema({

    title:String,
    releaseDate:String,
    director:String,
    type:String,
    rating:Number,
    image:String
})

const dataModel = mongoose.model('movie', movieSchema);

module.exports = dataModel;