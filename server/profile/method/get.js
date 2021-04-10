const {getProfile} = require('../functions/getProfile')

module.exports = async(req, res) => {
    try{
        let data = await getProfile(req, res)
        res.send(data)
    }catch(error){
        console.error(error)
        res.status(500).send({message: error})
    }
}