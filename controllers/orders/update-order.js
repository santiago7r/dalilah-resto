
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilah');

const updateorders = async (req, res) => {
    const {estado_de_orden, id_ordenes} = req.body;
    try {
        const updateDishState = await sequelize.query(
            `UPDATE delilah.ordenes
            SET estado_de_orden=:estado_de_orden
            WHERE id_ordenes=:id_ordenes;`,{
                replacements: {estado_de_orden, id_ordenes},
                type: sequelize.QueryTypes.UPDATE,
            }
        );
        res.status(201).json({msg: 'Order state updated succesfully', body: `Nuevo estado:${estado_de_orden},  Id de orden:${id_ordenes}`});
    } catch (error) {
        res.status(500).json({msg: 'Error', error: error});
    }
};

module.exports = 
{
    updateorders
};