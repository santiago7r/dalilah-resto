

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilah');

const getOrderProduct = async (req, res) => {
    console.log(req.body);
    try {
        const listOfProducts = await sequelize.query(
            `SELECT orden_producto_bridge.id_ordenes, productos.producto
             FROM delilah.orden_producto_bridge
             LEFT JOIN productos ON orden_producto_bridge.id_productos=productos.id_productos`, {
                type: sequelize.QueryTypes.SELECT,
            }
        );
        res.status(201).json({msg: 'products selected succesfully', body: listOfProducts});
        
    } catch (error) {
        res.status(500).json({msg: 'Error', error: error}); 
    }

    
};

module.exports = 
{
    getOrderProduct
};
