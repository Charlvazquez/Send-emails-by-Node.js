const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "outlook",
    auth:{
        user:"susana.vazquez@hospitalsantander.com.mx",
        pass:"##########"
    }
});

const options ={
    from:"susana.vazquez@hospitalsantander.com.mx",
    to:"kuroaddpsyker@gmail.com",
    subject:"Correo de prueba por Nodemailer",
    text:"este es un correo de prueba sigma"
};

transporter.sendMail(options, function(err,info){
    if(err){
        console.log(err);
        return;
    }
    console.log("Enviado:" + info.response)
})