
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilah');

const createOrders = async (req, res) => {
    const {id_usuarios, id_pagos} = req.body;
    console.log(req.body); 
    try {
      const resp = await sequelize.query(
        `INSERT INTO ordenes(id_usuarios, id_pagos, estado_de_orden)
         VALUES('${id_usuarios}', '${id_pagos}', 'nuevo');`,
        {
          type: sequelize.QueryTypes.INSERT,
        },
      );
      res.status(201).json({msg: 'Order added succesfully', body: resp});

    } catch (error) {
      res.status(500).json({msg: 'Error', error: { message: error.message, stack: error.stack }});
    }
 
};

module.exports = 
{
    createOrders,
};
