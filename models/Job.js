const mongoose = require('mongoose')

const JobShema = new mongoose.Schema({
    company:{
        type: String,
        required: [true, 'Please provide company name'],
        manxlength:50
    },
    position:{
        type: String,
        required: [true, 'Please provide postion'],
        maxlength: 100
    },
    status:{
        type: String,
        enum: ['interview','declined','pending'],
        default: 'pending',
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide user']
    }

}, {timestamps:true})

module.exports = mongoose.model('Jobs', JobShema)