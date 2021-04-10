const PostProfile = require('../../models/postProfile')

const createProfile = async (req,res) => {
    const { name, _id, contact_no, password, gender, selectedProfilePic, dateOfBirth} = req.body;

    const newPostProfile = new PostProfile({ name, _id, contact_no, password, gender, selectedProfilePic, dateOfBirth})
    try {
        await newPostProfile.save();
        return {name, _id, message: "Success"};
    } catch (error) {
        var temp = "\"E11000 duplicate key error collection: record.profileschemas index: _id_ dup key: { _id: \"".concat(_id).concat("\"}")
        if ((error.message).toString().localeCompare(temp) !== 0) {
            return res.status(200).json({ message: "Profile exist with same email." });
        } else {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports  = {
    createProfile
}