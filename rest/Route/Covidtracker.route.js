const express = require('express');
const router = express.Router();

const covidSchema = require('../Model/Covidtracker.model');

//post new entry
router.post('/', async (req, res, next) =>{
    try{
        const covid = new covidSchema(req.body);
        const result = await covid.save();
        res.send("Added Successfully");
    } catch (error){
        console.log(error.message);
    }
});

//Patch entry
router.patch('/:id', async (req, res, next) =>{
    try{
        const id = req.params.id;
        const update = req.body;
        const result = await covid.findByIdandUpdate(id, update);
        res.send(result);
    } catch (error){
        res.send(error.message);
    }
});

//Get by id
router.get('/:id', async (req, res, next) =>{
    const id = req.params.id;
    try{
        const result = await covid.findById(id);
        res.send(result);
    } catch (error){
        res.send(error.message);
    }
});

//get all
router.get('/', async (req, res, next) =>{
    try{
        const result = await covidSchema.find({},{});
        res.send(result);
    } catch (error){
        res.send(error.message);
    }
});

module.exports = router;