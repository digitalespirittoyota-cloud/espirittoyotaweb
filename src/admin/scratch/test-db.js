const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://erdeepak0718:lylBprmbs3GdL6wT@test.lwfh4.mongodb.net/espirit_toyota?retryWrites=true&w=majority";

console.log('Testing connection to MongoDB...');

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('✅ MongoDB connected successfully');
        process.exit(0);
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:');
        console.error(err.message);
        console.error(err);
        process.exit(1);
    });
