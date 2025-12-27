import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
            <h2 className="text-3xl font-bold mb-4">404 - Not Found</h2>
            <p className="text-lg text-gray-600 mb-6">Could not find requested resource</p>
            <Link href="/" className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                Return Home
            </Link>
        </div>
    )
}
