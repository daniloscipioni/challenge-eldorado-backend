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

        db.query(`INSERT INTO tbl_device(id_category, color, part_number)VALUES ('${req.category}','${req.color}','${req.partNumber}')`, function (err, result, fields) {
            if (err) throw err;

        });
        return {
            data: `Device  ${req.id_category} added!`,
            success: true
        }
    } catch (error) {
        return {
            data: 'Error',
            success: false,
            rowCount: 0,
            message: 'Device not registered!',
        };
    }

}

exports.deleteDevice = async (req, res) => {
    try {
        const response = await db.query(`DELETE FROM tbl_device where id = ${req}`, function (err, result, fields) {
            if (err) console.log(err.sqlMessage);
        });
        return {
            data: "Device must be removed",

        };
    } catch (error) {
        return {
            data: error,
            success: false,
            rowCount: 0,

        };
    }


}