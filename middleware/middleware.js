
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
            console.log(error);
            return res.status(401).json({msg: "token invalido"});
        }
        if(decoded.id_roles !== 1){
            return res.status(401).json({msg: "No autorizado, función unicamente para administradores"});
        }
        next()
    })
}


// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
  
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
//       if (err) return res.sendStatus(403)
//       req.user = user;
//       next();
//   })

// }

module.exports = {
  validarTokenAdmin
};
