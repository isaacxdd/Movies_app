const mongoose = require("./connection.js")
const movieData = require("./seedData.js")
const dataModel = require("./movie.js")

mongoose.connection.on("open", async()=>{

    const scrubbedData = movieData.map((v)=>{

        return{
            title: v.title,
            releaseDate: v.releaseDate,
            director: v.director,
            type: v.type,
            rating: v.rating,
            image: v.image
        }
    })
    await dataModel.deleteMany({})
    await dataModel.create(scrubbedData)
    mongoose.connection.close()
})