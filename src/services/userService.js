const User = require('../models/userSchema')
const fetchUser = async ( userId) => {
    try {
        const fetchedUser = await User.findById(userId)
        return fetchedUser
    } catch(err) {
        throw err;
    }
    
}

const createUser = async (newuser) => {
    try {
        let user = new User(newuser)
        let savedUser = user.save()
        return savedUser
    } catch (err) {
        throw err
    }
    
}

module.exports = {fetchUser, createUser}