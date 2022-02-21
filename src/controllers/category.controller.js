const db = require('../config/database');

/**
 *
 * @param {*} req
 * @param {*} res
 * @return a list of categories
 */
exports.listAllCategories = async (req, res) => {
  db.query('select id, name from tbl_category', (err, result, fields) => {
    if (err) throw err;
    res.status(200).json(
      {
        data: result,
        success: true,
        rowCount: result.length,
      },
    );
  });
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns A new registered category
 */
exports.registerCategory = async (req, res) => {
  try {
    db.query(`INSERT INTO tbl_category(name)VALUES ('${req.name}')`, (err, result, fields) => {
      if (err) throw err;
    });
    return {
      data: `Category  ${req.name} added!`,
      success: true,
    };
  } catch (error) {
    return {
      data: 'Error',
      success: false,
      rowCount: 0,
      message: 'Category not registered!',
    };
  }
};

/**
 *
 * @param {*} req id category
 * @returns Delete a category
 */
exports.deleteCategory = async (req) => {
  try {
    const response = await db.query(`DELETE FROM tbl_category where id = ${req}`, (err, result, fields) => {
      if (err) console.log(err.sqlMessage);
    });
    return {
      data: 'Register must be removed',

    };
  } catch (error) {
    return {
      data: error,
      success: false,
      rowCount: 0,

    };
  }
};
