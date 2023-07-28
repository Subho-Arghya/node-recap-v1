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

const updateUser = async (_id, data) => {
    try {
        let updatedUser = await User.findByIdAndUpdate(_id, data, {new: true})
        return updatedUser
    } catch(err) {
        throw err
    }
}

const deleteUser = async (_id) => {
    try {
        let deletedUser = await User.findByIdAndDelete(_id)
        return deletedUser
    } catch(err) {
        throw err
    }
}

module.exports = {fetchUser, createUser, updateUser, deleteUser}