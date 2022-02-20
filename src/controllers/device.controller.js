const db = require('../config/database.js');

exports.listAllDevices = async (req, res) => {

    db.query("select dev.id, cat.name category , color, part_number partNumber from tbl_device dev join tbl_category cat on dev.id_category = cat.id", function (err, result, fields) {
        
        try {
            res.status(200).json(
                {
                    data: result,
                    success: true,
                    rowCount: result.length
                }
            )
        } catch (error) {
           return {
                data: result,
                success: true,
                rowCount: result.length
            }
        }
       // if (err) throw err;
        
      
       

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