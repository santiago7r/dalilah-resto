
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilah');

const deleteProduct = async (req, res) => {
    const {id_productos} = req.body;
    try {
      const deletedProductById = await sequelize.query(
        `DELETE FROM delilah.productos
        WHERE id_productos = :id_productos;`,
        {
          replacements: {id_productos},
          type: sequelize.QueryTypes.DELETE,
        },
      );
      res.status(200).json({msg: 'product deleted succesfully', body: deletedProductById});
    } catch (error) {
      res.status(500).json({msg: 'Error when deleting from DB', error: error});
    }

};

module.exports = 
{
    deleteProduct
};
