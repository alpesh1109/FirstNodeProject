var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

class MyStaticEmailClass {

    static SentMail(mail, kanPass) {
      try {
        var transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: 'skent.qc@gmail.com',
                pass: 'fipl3178'
            }
        }));
        var mailOptions = {
            from: 'skent.qc@gmail.com',
            to: mail,
            subject: 'Sending Email using Node.js',
            text: kanPass
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        }); 
      }
      catch (e) {
          res.json(e);
      }
       
    }

    static anotherMethod() {
        console.log('Doing anotherMethod');
    }
    
}

module.exports = MyStaticEmailClass;