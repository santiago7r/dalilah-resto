
const jwt = require('jsonwebtoken');
const SECRET = process.env.ACCESS_TOKEN_SECRET;



const validarTokenAdmin =  (req, res, next) => {
    const jwtToken = req.headers["authorization"];
    if(!jwtToken) {
        return res.status(401).json({msg: "usuario no valido"});
    }
    const jwtClient = jwtToken.split(" ")[1];
     // autorizacion mitoken
    jwt.verify(jwtClient, SECRET, (error, decoded) => {
        if(error) {
            return res.status(401).json({msg: "token invalido", error: error.message, stack: error.stack});
        }
        if(decoded.id_roles !== 1){
            return res.status(401).json({msg: "No autorizado, función unicamente para administradores"});
        }
        next()
    })
}


module.exports = {
  validarTokenAdmin
};
