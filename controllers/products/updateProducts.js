
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilah');
const updateProducts = async (req, res) => {
    const {id_productos, producto, precio} = req.body;
    try {
        const updateDishState = sequelize.query(
            `UPDATE delilah.productos
            SET producto=:producto, precio=:precio
            WHERE id_productos=:id_productos;`,{
                replacements: {id_productos, producto, precio},
                type: sequelize.QueryTypes.UPDATE,
            }
        );
        res.status(201).json({msg: 'product updated succesfully', body: updateDishState});
    } catch (error) {
        res.status(500).json({msg: 'Error', error: error});
    }

    res.json({message:"Update dish request by an admin"});
};

module.exports = 
{
    updateProducts
};
