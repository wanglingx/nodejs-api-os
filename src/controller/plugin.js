const connection = require('../../database/connect');
class Plugin {

    uploadFilePlugin = (dataStudent, res) => {
        let sql = `INSERT INTO studentInform(
        student_id,
            first_name,
            last_name,
            address,
            district,
            province,
            passcode
        )
        VALUE (?,?,?,?,?,?,?)`
        connection.query(sql,
            [dataStudent.id,
            dataStudent.Firstname,
            dataStudent.Lastname,
            dataStudent.Address,
            dataStudent.district,
            dataStudent.province,
            dataStudent.passcode],
            function (err, result) {
                if (err) console.log("no query on time");
                else console.log(result);
            })
    }

    sentAllDataPlugin = (res) => {
        let sql = `
        SELECT * FROM studentInform`
        connection.query(sql,
            function (err, data) {
                if (err) console.log("not send");
                else {
                    return res.status(200).send({ response: data })
                }
            })
    }
}

module.exports = {
    Plugin
}