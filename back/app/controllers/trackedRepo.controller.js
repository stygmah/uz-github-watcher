const TrackedRepo = require('../db/Models/TrackedRepo.model');

module.exports = {
    saveTrackedRepo: async (req,res) => {
        if(req.body === null || !req.body.data){
            res.status(400).send();
            return;
        }
        try {
            const trackedRepo = new TrackedRepo(req.body.data);
            const doc = await trackedRepo.save();
            res.send();
        } catch (error) {
            res.status(500).send(error);
        }
    },

    getTrackedRepos: async (req,res) => {
        if(req.params === null || !req.params.page){
            res.status(400).send();
            return;
        }
        try {
            const page = req.params.page - 1;
            const docs = await TrackedRepo.find({},{},{ skip: page * 10, limit: 5 });
            res.send(docs);
        } catch (error) {
            res.status(500).send(error);
        }

    }
}