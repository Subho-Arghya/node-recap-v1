import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
    type: "postgres",
    host: "dpg-cj2461d9aq0e0q0n6acg-a.ohio-postgres.render.com",
    port: 5432,
    username: "arghya",
    password: "cnnXFNQremdsrNuas1akkkGBrWaLaiE2",
    database: "loominate_postgres_v1",
    ssl: {
        rejectUnauthorized: false
    }
})


export async function initializeDataSource() {
    AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err: any) => {
        console.error("Error during Data Source initialization", err)
    })

}


module.exports = {AppDataSource, initializeDataSource }