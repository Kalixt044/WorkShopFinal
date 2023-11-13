import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors())

export const conexion = mysql.createConnection({
    host : "",
    database : "",
    user : "",
    password : ""
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('BD Conectada exitosamente');
});

app.get('/',(req,res) =>{
    res.send('Inicio servidor')
})

app.get('/ejempl',(req,res) => {
    let database = 'namedb';
    let tabledb = 'nametable';
    var sqlpetget = `SELECT * FROM ${database}.${tabledb} WHERE IdEnvio = (SELECT MAX(IdEnvio ) FROM ${database}.${tabledb});`;
    conexion.query(sqlpetget, (err, mess, fields) => {
        res.status(200).json({
            data:mess,
        });
    });
})

app.use(express.json());

// Ruta para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error('Error al realizar la consulta:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            res.json(results);
        }
    });
});
app.post('/usuarios', (req, res) => {
    db.query('INSERT INTO usuarios SET ?', nuevoUsuario, (err, results) => {
    if (err) {
        console.error('Error al insertar un nuevo usuario:', err);
        res.status(500).send('Error interno del servidor');
    } else {
        const usuarioInsertado = {
        id: results.insertId,
        ...nuevoUsuario,
        };
        res.status(201).json(usuarioInsertado);
    }
    });
});

app.set('port',process.env.PORT || 8050)
app.use(express.json());
app.use(express.static('src'))
app.listen(app.get('port'), '0.0.0.0' ,()=>{
    console.log("Alojado en el puerto:",app.get('port'))
})