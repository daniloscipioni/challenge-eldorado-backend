const db = require('../config/database.js');

exports.listAllCategories = async (req, res) => {

    db.query("select id, name from tbl_category", function (err, result, fields) {
        if (err) throw err;
        res.status(200).json(
            {
                data: result,
                success: true,
                rowCount: result.length
            }
        )

    });
   
}

exports.registerCategory = async (req, res) => {
    try {

    } catch (error) {

    }

}

exports.deleteCategory = async (req, res) => {
    try {

    } catch (error) {

    }

}