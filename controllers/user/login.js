
const { json } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilah');
const jwt = require('jsonwebtoken');
const SECRET = 'd3l1l4h'; //Usar dotenv para generar valor del secret 
const EXPIRE = '1h';

const login = async (req, res) => { 
    const {e_mail, contrasenia} = req.body;
    console.log(req.body);
    
    if (contrasenia.length > 10){
        return res.status(400).json({msg:"Ha ocurrido un error con la contraseña y/o email"});
    }
    try {
        let resp = await sequelize.query(
            `SELECT * FROM  usuarios WHERE e_mail='${e_mail}' AND contrasenia='${contrasenia}';`,
            {
                type: sequelize.QueryTypes.SELECT,
            },
        );
        console.log(resp);

        resp = resp[0]; 

        if(resp){
            let token = jwt.sign({ e_mail: resp.e_mail, id_roles: resp.id_roles}, SECRET, { expiresIn: EXPIRE});
            return res.status(201).json({msg: 'Logged successfully', token: token});
        }
        return res.status(404).json({msg: 'Usuario no encontrado'});
        

        
    } catch (error) {
        res.status(400).json({msg: 'Ha ocurrido un error con correo y/o contraseña', error: { message: error.message, stack: error.stack } }); 
    }

};

module.exports = 
{
    login
};
