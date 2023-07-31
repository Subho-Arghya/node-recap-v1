//import { User } from "src/entities/UserEntity";

import User from '../models/userSchema'

export const fetchUser = async ( userId: Number) => {
    try {
        const fetchedUser = await User.findById(userId)
        return fetchedUser
    } catch(err) {
        throw err;
    }
    
}

export const createUser = async (newuser: any) => {
    try {
        let user = new User(newuser)
        let savedUser = user.save()
        return savedUser
    } catch (err) {
        throw err
    }
    
}

export const updateUser = async (_id: any, data: any) => {
    try {
        let updatedUser = await User.findByIdAndUpdate(_id, data, {new: true})
        return updatedUser
    } catch(err) {
        throw err
    }
}

export const deleteUser = async (_id: any) => {
    try {
        let deletedUser = await User.findByIdAndDelete(_id)
        return deletedUser
    } catch(err) {
        throw err
    }
}

//module.exports = {fetchUser, createUser, updateUser, deleteUser}