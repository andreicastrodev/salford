import mongoose from "mongoose";

const { Schema, model, models } = mongoose;


const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    numOfPeople: {
        type: String,
        required: true
    },
    comments: [{
        comments: {
            type: String,
            required: true
        }
    }]
})

module.exports = models.Event || model('Event', eventSchema)