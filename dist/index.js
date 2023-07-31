"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const userController_1 = __importDefault(require("./src/controllers/userController"));
const initializeDataSource_1 = require("./src/repository/initializeDataSource");
app.use(express.json());
app.use('/api/user', userController_1.default);
app.listen(5000, async () => {
    await (0, initializeDataSource_1.initializeDataSource)();
    console.log(`Listening at port 5000`);
});
//# sourceMappingURL=index.js.map