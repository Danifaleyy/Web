//Aqui haremos las conexiones a la base de datos
import mysql from 'mysql2/promise';

const conexion = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "daniel123",
    database: "pw2024"
});

export const obtienePersonal = async () =>{
    try {
        const [results] = await conexion.query('SELECT * FROM personal');
        return results;
    }catch(err){
        return{error: "No se puede obterner el personal"};
    }
}