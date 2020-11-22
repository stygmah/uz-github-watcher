const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const router = express.Router();
const trackedRepo = require('./trackedRepo.controller');

//
//MIDDLEWARE
//
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



///
/// ROUTES
///

//tracked-repos
router.get('/tracked-repos/:page', trackedRepo.getTrackedRepos);
router.post('/tracked-repo', trackedRepo.saveTrackedRepo);


app.use('/', router);
module.exports = app;