
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilah');

const createAdmin = async (req, res) => { 
    const {nombre_de_usuario, nombre, apellido, e_mail, celular, direccion, contrasenia, estado} = req.body;
    console.log(req.body);

    if (contrasenia.length > 10){
        return res.status(400).json({msg:"Ha ocurrido un error con la contraseña"});
    }

    try {
        // const id_roles = 2;
        const resp = await sequelize.query(
            //id_roles admin = 1 y cliente = 2
            `INSERT INTO usuarios(nombre_de_usuario, nombre, apellido, e_mail, celular, direccion, contrasenia, estado, id_roles)
                VALUES('${nombre_de_usuario}', '${nombre}', '${apellido}', '${e_mail}', '${celular}', '${direccion}', '${contrasenia}', '${estado}', 1);`,
            {
                type: sequelize.QueryTypes.INSERT,
            },
        );
      res.status(201).json({msg: 'User created successfully', body: resp});
    } catch (error) {
      res.status(400).json({msg: 'Ha ocurrido un error', error}); 
    }

};

module.exports = 
{
    createAdmin
};
