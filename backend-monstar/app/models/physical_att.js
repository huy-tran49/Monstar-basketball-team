const mongoose = require('mongoose')

const physicalAttSchema = new mongoose.Schema({
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    wingspan: {
        type: Number
    }
})

module.export = physicalAttSchema