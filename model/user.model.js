const pool = require("../config/database");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into registration(firstName, lastName, gender, email, password, number) 
                  values(?,?,?,?,?,?)`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getusers: (callBack) => {
    pool.query(
      `select id,firstName,lastName,gender,email,number from registration`,
      [
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
       
        return callBack(null, results);
      }
    );
  },

  getuserbyEmail: (email,callBack) => {
    pool.query(
      `select id,firstName,lastName,gender,email,number from registration where email=?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateusers: (data,callBack) => {
    pool.query(
      `update registration set firstName=?,lastName=?,gender=?,email=?, password=?,number=? where id=?`,
      [ data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteuser: (data,callBack) => {
    pool.query(
      `delete from registration where id=?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
