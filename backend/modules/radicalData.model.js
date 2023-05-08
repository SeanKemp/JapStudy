import mongoose from 'mongoose'

// Radical Data schema for mongoDB database
const RadicalDataSchema = new mongoose.Schema({
    sort_id: {
        type: Number,
        unique: true,
        required: 'No Sort Id was specified'
    },
    label: {
        type: String,
        trim: true
    },
    level: {
        type: Number,
        required: 'Level is required'
    },
    meaning: {
        type: Array,
        required: 'Meaning is required'
    }
})

const radicalDataModel = mongoose.model('RadicalData', Radical);
radicalDataModel.createIndexes();
export default radicalDataModel
