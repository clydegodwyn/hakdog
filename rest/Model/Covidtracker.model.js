const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const CovidTrackerSchema = new Schema ({
    details: {
        fullName: {type: String},
        vax_brand: {type: String},
        nameofvaccinator: {type: String},
        address: {type: String}
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});
const covid = mongoose.model('covidtracker', CovidTrackerSchema);

module.exports = covid;