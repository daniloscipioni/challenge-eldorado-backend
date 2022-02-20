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

        db.query(`INSERT INTO tbl_category(name)VALUES ('${req.name}')`, function (err, result, fields) {
            if (err) throw err;

        });
        return { 
                 data: `Category  ${req.name} added!`, 
                 success: true 
               }
    } catch (error) {
        return {
            data: 'Error', 
            success: false, 
            rowCount: 0, 
            message: 'Category not registered!',
        };
    }

}

exports.deleteCategory = async (req) => {
    try {

        db.query(`DELETE FROM tbl_category where id = ${req}`, function (err, result, fields) {
            if (err) throw err;

        });
        return { 
                    data: `Category  ${req} removida!`, 
                    success: true 
                }
    } catch (error) {
        return {
            data: 'Error', 
            success: false, 
            rowCount: 0, 
            message: 'Category not removed!',
        };
    }

}