"use strict";
const { AppDataSource } = require('./initializeDataSource');
const User = require('../entities/UserEntity');
async function initializeUserRepository() {
    return AppDataSource.getRepository(User);
}
//# sourceMappingURL=userRepository.js.map