import connectDB from './src/app/lib/db';
import Admin from './src/models/Admin';

async function checkAdmin() {
    try {
        await connectDB();
        const count = await Admin.countDocuments();
        console.log(`Admin count: ${count}`);
    } catch (e) {
        console.error(e);
    } finally {
        process.exit();
    }
}

checkAdmin();
