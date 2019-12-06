exports.jobdescription = function (req, res) {
    // var param = req.query;
    req.getConnection(function (err, connection) {
        try {

            let sql = 'CALL SpJobPosition()';

            connection.query(sql, (error, results, fields) => {

                res.json(results[0]);

            });

        } catch (e) {
            res.json(e);
        }
    });
};