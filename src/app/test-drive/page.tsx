import { Metadata } from 'next';
import Image from 'next/image';
import TestDriveForm from '../components/TestDriveForm';
import { CheckCircle, MapPin, ShieldCheck, Clock, UserCheck, Car } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Book Toyota Test Drive | Espirit Toyota Authorized Dealer',
    description:
        'Book your Toyota test drive with Espirit Toyota. Experience comfort, safety and performance at our showroom or opt for a doorstep test drive in Bhubaneswar.',
    keywords: [
        'toyota test drive',
        'book toyota test drive',
        'book test drive toyota',
        'toyota test drive booking',
        'toyota showroom test drive',
        'toyota doorstep test drive',
        'toyota test drive bhubaneswar',
        'espirit toyota test drive',
        'authorized toyota dealer',
        'toyota showroom bhubaneswar',
    ],
};


export default function TestDrivePage() {
    return (
        <div className="bg-white min-h-screen">
            {/* 1. Page Banner */}
            {/* 1. Page Banner */}
            {/* 1. Page Banner */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black">
                <Image
                    src="/banner/banner5.jpg"
                    alt="Toyota Test Drive"
                    fill
                    className="object-contain"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg tracking-wide uppercase">
                        Book Espirit Toyota Test Drive
                    </h1>
                    <p className="text-lg md:text-xl font-medium drop-shadow-md text-gray-100 max-w-2xl">
                        Book a Toyota test drive with Espirit Toyota, an authorized Toyota dealer in
                        Bhubaneswar. Experience Toyota’s comfort, safety, and performance with a
                        showroom or doorstep test drive. Our experts will guide you through features,
                        pricing, and offers during your test drive experience.
                    </p>
                    <a
                        href="#book-form"
                        className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-red-500/50 transform hover:-translate-y-1"
                    >
                        Book Now
                    </a>
                </div>
            </div>

            {/* Main Content Sections */}
            <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Info, Steps, Trust */}
                <div className="lg:col-span-2 space-y-16">

                    {/* 3. Informational Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Test Drive a Toyota?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            A test drive is the best way to experience the superior engineering, comfort, and safety that Toyota is known for. Whether you are eyeing the robust Fortuner, the family-friendly Innova Hycross, or the efficient Hyryder, getting behind the wheel will give you the confidence to make the right choice.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At Espirit Toyota, we offer flexible test drive options. You can visit our state-of-the-art showroom or request a <strong>doorstep test drive</strong> for select models in Bhubaneswar.
                        </p>
                    </section>

                    {/* 4. Steps Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: CheckCircle, title: "1. Request", desc: "Fill out the simple form with your preferred model and time." },
                                { icon: Clock, title: "2. Confirmation", desc: "Our team will call you to confirm your slot and location." },
                                { icon: Car, title: "3. Experience", desc: "Enjoy the drive and explore the features with our expert." }
                            ].map((step, idx) => (
                                <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                                        <step.icon size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h4>
                                    <p className="text-gray-600">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 5. Trust Section */}
                    <section className="bg-black text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                        <h2 className="text-3xl font-bold mb-6 relative z-10">Why Choose Espirit Toyota?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="text-red-500 shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-lg">Authorized Dealer</h4>
                                    <p className="text-gray-400 text-sm">Official Toyota dealership ensuring 100% genuine experience.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <UserCheck className="text-red-500 shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-lg">Trained Experts</h4>
                                    <p className="text-gray-400 text-sm">Our sales consultants are trained to answer all your queries.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="text-red-500 shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-lg">Multiple Locations</h4>
                                    <p className="text-gray-400 text-sm">Conveniently located showrooms and service centers.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-red-500 shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-lg">No Obligation</h4>
                                    <p className="text-gray-400 text-sm">Test drives are completely free with no pressure to buy.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Right Column: Sticky Form */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24" id="book-form">
                        <TestDriveForm />
                    </div>
                </div>

            </div>
        </div>
    );
}
