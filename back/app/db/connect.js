const mongoose = require("mongoose");

module.exports = {
    connect: (db) => {
        const connect = () => {
            mongoose
            .connect(db, { useNewUrlParser: true })
            .then(() => {
                return console.log(`Successfully connected to mongo database`);
            })
            .catch(error => {
                console.log(`Error connecting to database: ${error}`);
                return process.exit(1);
            });
        };
        connect();

        mongoose.connection.on("disconnected", connect);
    }
}