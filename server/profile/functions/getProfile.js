const PostProfile = require('../../models/postProfile')

const getProfile = async (req,res) => {
    const { _id } = req.query;
    try {
        const profile = await PostProfile.findById(_id);
        return {profile};

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports  = {
    getProfile
}