import app from "./app";

import sequelize from "./database";

sequelize
    .sync({ force: false })
    .then(async () => {
        console.log("Database schema has been synchronized.");
        app.listen(app.get("port"));
        console.log(`App running on port: ${app.get("port")}`);
    })
    .catch((error) => {
        console.error("Unable to synchronize the database schema:", error);
    });
