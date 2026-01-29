import Banner from "../commonbanner/Banner";
import PowerToCommand from "./PowerToCommand";
import VideoShowcase from "./VideoShowcase";

export default function Page() {
    return (
        <>
            <Banner
                desktopImg="/legender/legender-awesome-ban1.webp"
                mobileImg="/legender/legender-awesome-ban1.webp"
                height="110vh"
            />

            <Banner
                desktopImg="/legender/vs-hp-legender-banner2.jpg"
                mobileImg="/legender/vs-hp-legender-banner2mobile.jpg"
                height="90vh"
                link="https://www.toyotabharat.com/virtual-showroom/legender.html"
            />
            <VideoShowcase />
            <PowerToCommand
                bgImage="/legender/power-to-command-bg.jpg"
                carImage="/legender/power-to-command-car.png"
                title={`Power To\nCommand`}
                middleImage="/legender/power-to-command-img02.jpg"
                description="The new Legender houses a refined 6-speed Diesel AT engine. The power on tap complements the cutting-edge design of the Legender seamlessly. Take command of the incredible power and make a style statement as you breeze through the urban jungle."
            />


        </>
    );
}
