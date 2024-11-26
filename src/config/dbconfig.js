const mongoose = require('mongoose');


const connectDatabase = async () => {
    const connectionString = "mongodb+srv://testuser:4prjsYlyMSgkc05E@cluster0.3c7v0.mongodb.net/testdb"
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to Database');
    } catch (error) {
        console.error('Could not connect to Database', error);
        process.exit(1);
    }

}

module.exports = connectDatabase
