const db = require('../config/database.js');

exports.listAllDevices = async (req, res) => {

    db.query("select dev.id,cat.name,color,part_number from tbl_device dev join tbl_category cat on dev.id_category = cat.id", function (err, result, fields) {
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

exports.registerDevice = async (req, res) => {
    try {
        
    } catch (error) {
        
    }

}

exports.deleteDevice = async (req, res) => {
    try {
        
    } catch (error) {
        
    }

}