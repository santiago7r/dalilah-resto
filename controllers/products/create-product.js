
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilah');
const createProduct = async (req, res) => {
    const {producto, precio} = req.body;
    console.log(req.body);
    try {
      const resp = await sequelize.query(
        `INSERT INTO productos(producto, precio)
         VALUES(:producto, :precio);`,
        {
          replacements: {producto, precio},
          type: sequelize.QueryTypes.INSERT,
        },
      );
      res.status(201).json({msg: 'product added succesfully', body: resp});

    } catch (error) {
      res.status(500).json({msg: 'Error', error: error});
    }
 
};

module.exports = 
{
    createProduct,
};