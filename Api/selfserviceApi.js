
exports.holidaylist = function (req, res) {
    //var param = req.body;
    req.getConnection(function (err, connection) {
        try {
            let sql = 'CALL SpGetHolidayCal()';

            connection.query(sql, (error, results, fields) => {
                res.json(results[0]);
            });

        } catch (e) {
            res.json(e);
        }

    });
};
exports.timesheet = function (req, res) {
    var param = req.query;
    req.getConnection(function (err, connection) {
        try {
            let sql = 'CALL SpGetTimesheet(' + param.emId + ')';

            connection.query(sql, (error, results, fields) => {
                if (results) {
                    // console.log(JSON.parse(JSON.stringify(results[0])));
                    var temp = JSON.parse(JSON.stringify(results[0]));
                    res.json(temp);
                    //console.log(res)
                }
                else {
                    //console.log(sessionstorage.getItem('email'));
                    res.json([{ varmsg: 'Sorry! your record can not found' }]);
                }
            });

        } catch (e) {
            res.json(e);
        }
    });
};
exports.empdetails = function (req, res) {
    var param = req.query;
    req.getConnection(function (err, connection) {
        try {

            let sql = 'CALL SpGetEmpDetails(' + param.emId + ')';

            connection.query(sql, (error, results, fields) => {
                if (results) {
                    res.json(results[0]);
                }
                else {
                    res.json([{ varmsg: 'Sorry! your record can not found' }]);
                }
            });

        } catch (e) {
            res.json(e);
        }
    });
};