const express = require("express");
const people = require("./people.json");
var path = require('path');
var mysql = require('mysql');

var connection = require('express-myconnection');
var cors = require('cors');
const app = express();
var countryApi = require('./Api/countriApi');
var selfserviceApi = require('./Api/selfserviceApi');
var orginfoApi = require('./Api/qaApi');
var jobposApi = require('./Api/recruitmentsApi');
var useridname = require('./Api/UserIdName');

//app.set("view engine", "pug");
// serve static files from the `public` folder

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

app.use(

  connection(mysql, {

    host: 'localhost',
    user: 'root',
    password: '',
    //user: 'emotapp',
    //password: '12QWasZX',
    //port : 3306, //port mysql
    database: 'sentrifugo'

  }, 'request'), //or single

);

// const database = {
//     client: "pg", // pg is the database library for postgreSQL on knexjs
//     connection: {
//       host: "127.0.0.1", // "127.0.0.1"
//       user: "postgres", // Your postgres user name
//       password: "Jemmy", // Your postrgres user password
//       database: "botpress" // Your database name
//     }
//   };
//   const knex = require('knex')(database);
app.use(cors());
//   app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
// app.get('/historyfetch', function (req, res) {
//   let param = req.query;
//   try {
//       knex.select('event','direction','id')
//       .from('events')

//       .where('channel', '=', 'api')
//       .andWhere('target', '=', param.target)
//       .andWhere('botId', '=', param.botId)
//       .orderBy('id', 'asc')
//       .then(results => {
//         //  console.log(results)
//         res.json(results);
//      })

//   }
//   catch (e) {
//       res.json(e);
//   }
// }); 
// app.get('/*', function (req, res) {
//     //res.send('Hello World!');
//     res.sendFile(path.join(__dirname + '/index.html'));
// })

// app.get("/", (req, res) => {
//   res.render("index", {
//     title: "Homepage",
//     people: people.profiles
//   });
// });

// app.get("/profile", (req, res) => {
//   const person = people.profiles.find(p => p.id === req.query.id);
//   res.render("profile", {
//     title: `About ${person.firstname} ${person.lastname}`,
//     person
//   });
// });

app.get('/GetCountryList', countryApi.countrylist);
app.post('/GetHolidayList', selfserviceApi.holidaylist);
app.get('/GetTimeSheetList', selfserviceApi.timesheet);
app.get('/GetEmployeeDetails', selfserviceApi.empdetails);
app.get('/GetOrgInfo', orginfoApi.orginfo);
app.get('/GetDisciplinaryInfo', orginfoApi.disciplinaryinfo);
app.get('/GetExitProcedureInfo', orginfoApi.exitprocedureinfo);
app.get('/GetBusinessUnit', orginfoApi.orgbusunit);
app.get('/GetOrgDepartment', orginfoApi.orgdepartment);
app.get('/GetJobPosion', jobposApi.jobdescription);
app.get('/GetUserIdName', useridname.getusernameid);
app.get('/SignInDataa', useridname.kanuserlogin);

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});