const express = require('express');
const router = express.Router();

const CovidTracker = require('../Model/Vaccinator.model');

const app = express();

//get all
router.get('/', async (req, res, next) =>{
    try{
        const result = await Vaccinator.find({} ());
        res.send(result);
    } catch (error){
        res.send(error.message);
    }
});

//delete by id
router.delete('/:id', async (req, res, next) =>{
    const id = req.params.id;
    try{
        const result = await CovidTracker.findByIdAndDelete(id);
        res.send(result);
    } catch (error){
        res.send(error.message);
    }
});

module.exports = router;