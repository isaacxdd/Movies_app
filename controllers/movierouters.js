const express = require("express")
const dataModel = require("../models/movie.js")
const router = express.Router()

//////////////////////////////////////////////////////////////////////////////INDEX
router.get("/", async (req, res) => {
    const totalmovies = await dataModel.find({})
    res.render("index.ejs",{totalmovies}) 
 })
 
 // /////////////////////////////////////////////////////////////////////////////////// NEW
router.get("/new", (req, res)=>{
    res.render("new.ejs")
} )

// ///////////////////////////////////////////////////////////////////////////////////DELETE
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const onemovie = await dataModel.findByIdAndDelete(id, req.body);
    res.redirect('/movie')
})

// /////////////////////////////////////////////////////////////////////////////////////UPDATE
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const onemovie = await dataModel.findByIdAndUpdate(id, req.body);
    res.redirect('/movie')
})

// ///////////////////////////////////////////////////////////////////////////////////////CREATE
router.post('/', async (req, res) => {
    console.log (req.body)
   const addmovie= await dataModel.create(req.body);
    res.redirect('/movie');
})
 
// //////////////////////////////////////////////////////////////////////////////////////// EDIT
router.get('/:id/edit', async (req, res) => {
    const id = req.params.id;
    const onemovie = await dataModel.findById(id);
    res.render('edit.ejs', {onemovie})
})

// /////////////////////////////////////////////////////////////////////////////////////////SHOW
router.get("/:id", async (req, res)=>{
    const id = req.params.id
    const onemovie =  await dataModel.findById(id)
    res.render("show.ejs", {onemovie, id})
})
 
module.exports= router