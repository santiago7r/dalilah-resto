
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilah');

const orderProductBridge = async (req, res) => {
    const {id_ordenes, id_productos} = req.body;
    console.log(req.body); 
    try {
      const resp = await sequelize.query(
        `INSERT INTO orden_producto_bridge(id_ordenes, id_productos)
         VALUES('${id_ordenes}', '${id_productos}');`,
        {
          type: sequelize.QueryTypes.INSERT,
        },
      );
      res.status(201).json({msg: 'Order-product added succesfully', body: resp});

    } catch (error) {
      res.status(500).json({msg: 'Error', error: { message: error.message, stack: error.stack }});
    }
 
};

module.exports = 
{
    orderProductBridge,
};
