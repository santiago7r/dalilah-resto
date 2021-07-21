

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilah');

const clientOrder = async (req, res) => {
    const {id_usuarios}=req.body;
    console.log(req.body);
    try {
        const clientOrder = await sequelize.query(
            `SELECT id_ordenes FROM ordenes 
            INNER JOIN usuarios ON ordenes.id_usuarios=usuarios.id_usuarios 
            WHERE usuarios.id_usuarios=:id_usuarios;`, 
            {
                replacements: {id_usuarios: id_usuarios},
                type: sequelize.QueryTypes.SELECT,
            }
        );
        res.status(201).json({msg: 'This are all the orders', body: clientOrder});
        
    } catch (error) {
        res.status(500).json({msg: 'Error', error: { message: error.message, stack: error.stack }}); 
    }    
};

module.exports = 
{
    clientOrder
};