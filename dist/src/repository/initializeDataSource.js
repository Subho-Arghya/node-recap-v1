"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDataSource = void 0;
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "dpg-cj2461d9aq0e0q0n6acg-a.ohio-postgres.render.com",
    port: 5432,
    username: "arghya",
    password: "cnnXFNQremdsrNuas1akkkGBrWaLaiE2",
    database: "loominate_postgres_v1",
    ssl: {
        rejectUnauthorized: false
    }
});
async function initializeDataSource() {
    AppDataSource.initialize()
        .then(() => {
        console.log("Data Source has been initialized!");
    })
        .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
}
exports.initializeDataSource = initializeDataSource;
module.exports = { AppDataSource, initializeDataSource };
//# sourceMappingURL=initializeDataSource.js.map