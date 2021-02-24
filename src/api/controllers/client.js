const bcrypt = require('bcrypt')
const {knex} = require('../../config/DbConfig')
const { use } = require('../routers/client')

const registerClient = async (req, res, next) => {
    const {userName, pass} = req.body

    const [user] = await knex.select('name', 'pass')
        .from('users')
        .where({
            name: userName
        })
    
    if(!user) return res.json({
        authentication: false,
        menssage: 'Login fail'
    })

    bcrypt.compare(pass, user.pass, (err, result) =>{
        if(err) return res.json({
            authentication: false,
            error: err.toString()
        })
        if(result) return res.json({
            authentication: true,
            menssage: `senha: ${pass}<br>hash pass: ${result}<br>Salt: ${process.env.BCRYPT_SALT}`
        })
        return res.json({
            authentication: false,
            menssage: 'Login fail'
        })
    })
}

module.exports = { registerClient }