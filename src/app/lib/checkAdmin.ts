import connectDB from '../lib/db';
import Admin from '../../models/Admin';

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
