"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.fetchUser = void 0;
const userSchema_1 = __importDefault(require("../models/userSchema"));
const fetchUser = async (userId) => {
    try {
        const fetchedUser = await userSchema_1.default.findById(userId);
        return fetchedUser;
    }
    catch (err) {
        throw err;
    }
};
exports.fetchUser = fetchUser;
const createUser = async (newuser) => {
    try {
        let user = new userSchema_1.default(newuser);
        let savedUser = user.save();
        return savedUser;
    }
    catch (err) {
        throw err;
    }
};
exports.createUser = createUser;
const updateUser = async (_id, data) => {
    try {
        let updatedUser = await userSchema_1.default.findByIdAndUpdate(_id, data, { new: true });
        return updatedUser;
    }
    catch (err) {
        throw err;
    }
};
exports.updateUser = updateUser;
const deleteUser = async (_id) => {
    try {
        let deletedUser = await userSchema_1.default.findByIdAndDelete(_id);
        return deletedUser;
    }
    catch (err) {
        throw err;
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userService.js.map