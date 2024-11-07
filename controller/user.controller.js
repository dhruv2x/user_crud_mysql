const { create, getusers, getuserbyEmail ,updateusers, deleteuser} = require("../model/user.model");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  fetchUser: (req, res) => {
    getusers( (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  fetchUserbyEmail: (req, res) => {

    const email = req.params.email;
    getuserbyEmail(email, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }

      if (!results || results.length === 0) {
        return res.json({
          success: 0,
          message: "Record not Found"
        });}

      return res.status(200).json({
        success: 1,
        message: "user fetched",
        data: results,
      });
    });
  },


  updateUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateusers(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "updated successfully",
        data: results,
      });
    });
  },

  deleteUser: (req, res) => {
    const body = req.body;
    deleteuser(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "Deleted successfully",
        data: results,
      });
    });
  },
};