import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        console.log("Running DB Connect");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB DATABASE connected');
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

export default dbConnect;
