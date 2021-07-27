
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilah');

const deleteOrder = async (req, res) => {
    const {id_ordenes} = req.body;
    try {
      const deletedOrderProductById = await sequelize.query(
        `DELETE FROM delilah.orden_producto_bridge
        WHERE id_ordenes = :id_ordenes;`,
        {
          replacements: {id_ordenes},
          type: sequelize.QueryTypes.DELETE,
        },
      );

    } catch (error) {
      res.status(500).json({msg: 'Error when deleting from DB', error: error});
    }

    try {
        const deletedOrderById = await sequelize.query(
          `DELETE FROM delilah.ordenes
          WHERE id_ordenes = :id_ordenes;`,
          {
            replacements: {id_ordenes},
            type: sequelize.QueryTypes.DELETE,
          },
        );
        res.status(200).json({msg: 'Order deleted succesfully', body: deletedOrderById});
      } catch (error) {
        res.status(500).json({msg: 'Error when deleting from DB', error: error});
      }

};

module.exports = 
{
    deleteOrder
};
