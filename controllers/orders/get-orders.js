
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilah');

const getOrder = async (req, res) => {
    console.log(req.body);
    try {
        const listOfProducts = await sequelize.query(
            `SELECT *
             FROM delilah.ordenes;`, {
                type: sequelize.QueryTypes.SELECT,
            }
        );
        res.status(201).json({msg: 'This are all the orders', body: listOfProducts});
        
    } catch (error) {
        res.status(500).json({msg: 'Error', error: { message: error.message, stack: error.stack }}); 
    }    
};

module.exports = 
{
    getOrder
};