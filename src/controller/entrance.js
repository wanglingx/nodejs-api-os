const models = require('../models/student');
const { Logic } = require('./logic');

class Entrance {
    constructor() {
        this.dataStudent = models.dataStudent
    }

    uploadFileEntrance = async (req, res) => {
        let filePath = __dirname + "/uploads/" + req.file.originalname
        new Logic().uploadFileLogic(filePath, res);
    }

    sentAllDataEntrance = (req, res) => {
        new Logic().sentAllDataLogic(res);
    }
}

module.exports = {
    Entrance
}