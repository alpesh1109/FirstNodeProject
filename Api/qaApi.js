exports.orginfo = function (req, res) {
   // var param = req.query;
    req.getConnection(function (err, connection) {
        try {
           
                let sql = 'CALL SpGetOrgInfo()';

                connection.query(sql, (error, results, fields) => {
 
                        res.json(results[0]);
                                      
                });          
          
        } catch (e) {
            res.json(e);
        }
    });
};
exports.disciplinaryinfo = function (req, res) {
    // var param = req.query;
    req.getConnection(function (err, connection) {
        try {
           
                let sql = 'CALL SpGetDisciplinaryInfo()';

                connection.query(sql, (error, results, fields) => {
 
                        res.json(results[0]);
                                      
                });          
          
        } catch (e) {
            res.json(e);
        }
    });
};

exports.exitprocedureinfo = function (req, res) {
    // var param = req.query;
    req.getConnection(function (err, connection) {
        try {
           
                let sql = 'CALL SpGetExitProcedure()';

                connection.query(sql, (error, results, fields) => {
 
                        res.json(results[0]);
                                      
                });          
          
        } catch (e) {
            res.json(e);
        }
    });
};
exports.orgbusunit = function (req, res) {
    //var param = req.body;
    req.getConnection(function (err, connection) {
        try {
            let sql = 'CALL SpGetBusinessUnit()';

            connection.query(sql, (error, results, fields) => {
                res.json(results[0]);
            });

        } catch (e) {
            res.json(e);
        }

    });
};
exports.orgdepartment = function (req, res) {
    //var param = req.body;
    req.getConnection(function (err, connection) {
        try {
            let sql = 'CALL SpOrgDepartments()';

            connection.query(sql, (error, results, fields) => {
                res.json(results[0]);
            });

        } catch (e) {
            res.json(e);
        }

    });
};