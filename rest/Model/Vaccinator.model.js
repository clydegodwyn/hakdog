const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Vaccinator_informationSchema = new Schema ({
    details: {
        fname: {type: String},
        mname: {type: Boolean},
        lname: {type: String},
        address: {type: String},
        birthday: {type: Date},
        contact_no: {type: String},
        gender: {type: String},
        category: {type: String},
    },
    healthFacilityName: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});
const VaccinatorInformation = mongoose.model('vaccinator_information', Vaccinator_informationSchema);
module.exports = VaccinatorInformation;