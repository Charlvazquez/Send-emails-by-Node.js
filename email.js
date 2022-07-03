const nodemailer = require('nodemailer');

const crearTrans = () =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth:{
            user:"481509a1869f11",
            pass:"32636a416643e5"
        }
    });

    return transport;    
}

const sendMail = async () =>{
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from:'"el capo"<ff12@example.com>',
        to:['kuroaddpsyker@gmail.com, charlvazquez1925@gmail.com'],
        subject:"Correo de prueba",
        html:"<b>Correo de prueba usando Nodemailer</b>"
    });

    console.log("Mensaje enviado: %s", info.messageId);
    return
}
