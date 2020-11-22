const {Schema, model} = require('mongoose');

const TrackedRepoSchema = new Schema({
    repo: {type: String, required: true},
    metaInformation: {type: Schema.Types.Mixed, required: true},
},{timestamps: true});

module.exports = model('TrackedRepo', TrackedRepoSchema);