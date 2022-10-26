const mysql = require('mysql');
const conection =  mysql.createConnection({
    host: 'localhost',
    user: 'brandon',
    password: 'Trujillo17.',
    database: 'polinizadores_web'
});

conection.connect((err) =>{
    if(err) throw err
    console.log('La conexion funciona')
})

function obtenerLogin(){
    conection.query('SELECT * FROM usuario', (err, rows) =>{
        if(err) throw err
        console.log("Los datos son:");
        console.log(rows);
        const usuario = rows[0];
        console.log('El usuario se llama:' + usuario.nombre + ' y su correo es:'+usuario.correoElectronico);
    })
    conection.end()
}

module.exports = {
    "obtenerLogin": obtenerLogin
}


