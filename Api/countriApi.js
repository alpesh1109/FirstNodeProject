exports.countrylist = function (req, res) {
    //var param = req.body;
    req.getConnection(function (err, connection) {
        try {
            let sql = 'CALL SpGetCountry()';

            connection.query(sql, (error, results, fields) => {
                res.json(results[0]);
            });

        } catch (e) {
            res.json(e);
        }

    });

};