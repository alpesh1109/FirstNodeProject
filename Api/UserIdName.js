var sessionstorage = require('sessionstorage');
var MyEncryptDecryptClass = require("../Logic/encryptdecrypt");
exports.getusernameid = function (req, res) {

  var empid = sessionstorage.getItem('empid');
  var empcode = sessionstorage.getItem('empcode');
  var empname = sessionstorage.getItem('empname');
  var auth = sessionstorage.getItem('auth');
  req.getConnection(function (err, connection) {
    try {

      res.json([{ empid: empid, empcode: empcode, empname: empname, auth: auth }]);

    }
    catch (e) {
      res.json(e);
    }

  });
  // sessionstorage.clear(); 
  //  var dd=sessionstorage.getItem('auth');
  //  console.log(dd);
};
exports.kanuserlogin = function (req, res) {
  var param = req.query;
  if (param.kanPass) {
    var kanPass = MyEncryptDecryptClass.encrypt(param.kanPass);
  }
  req.getConnection(function (err, connection) {
    let sql = 'CALL SpSignIn("' + param.kanEmail + '","' + kanPass + '")';
    try {
      connection.query(sql, true, (error, results, fields) => {
        if (error) {
          return console.log(error);
        }
        sessionstorage.setItem('auth', results[0][0].auth);
        var email = results[0][0].kanEmail;
        var name = results[0][0].kanName;
        let sql = 'CALL SpGetUserIdName("' + email + '" , "' + name + '")';
        connection.query(sql, true, (error, results, fields) => {
          if (error) {
            return console.log(error);
          }
          if (results[0][0]) {

            var empid = JSON.parse(JSON.stringify(results[0][0].employeeId));
            var empcode = JSON.parse(JSON.stringify(results[0][0].id));
            var empname = JSON.parse(JSON.stringify(results[0][0].firstname));
            sessionstorage.setItem('empid', empid);
            sessionstorage.setItem('empcode', empcode);
            sessionstorage.setItem('empname', empname);
            return;
            // console.log(sessionstorage.getItem('email'));
          }
        });
        res.json(results[0]);

      });

    }
    catch (e) {
      res.json(e);
    }

  });
};