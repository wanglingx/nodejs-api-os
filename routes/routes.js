const express = require('express');
const multer = require('multer');
const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'controller/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname.split('.')[file.originalname.split('.').length - 2] + '.' +
            file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
})
const upload = multer({ storage: storage })
const { Entrance } = require('../src/controller/entrance');

router.post("/uploadFile", upload.single("file"), new Entrance().uploadFileEntrance);

router.get("/getData", new Entrance().sentAllDataEntrance);

module.exports = router;