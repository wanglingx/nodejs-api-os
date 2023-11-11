const { Plugin } = require('./plugin');
const { dataStudent } = require('../models/student');
const xlsx = require('xlsx');
const fs = require('fs');

class Logic {

    uploadFileLogic = (file, res) => {
        if (!file) {
            return res.status(400).send({ Response: "No such file uploaded !" });
        }
        const worksheet = xlsx.readFile(file);
        let data = []
        const sheets = worksheet.SheetNames
        for (let i = 0; i < sheets.length; i++) {
            const temp = xlsx.utils.sheet_to_json(
                worksheet.Sheets[worksheet.SheetNames[i]]
            )
            temp.forEach((res) => {
                data.push(res)
            })
        }
        // delete file
        fs.unlink(file, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })

        //database connect
        for (let i = 0; i < data.length; i++) {
            dataStudent.id = data[i].student_id;
            dataStudent.Firstname = data[i].first_name;
            dataStudent.Lastname = data[i].last_name;
            dataStudent.Address = data[i].address;
            dataStudent.district = data[i].district;
            dataStudent.province = data[i].province;
            dataStudent.passcode = data[i].passcode;
            new Plugin().uploadFilePlugin(dataStudent, res);
        }
        return res.status(200).send({ Response: "insert finished", data: data })
    }
    sentAllDataLogic = (res) => {
        new Plugin().sentAllDataPlugin(res);
    }
}

module.exports = {
    Logic
}