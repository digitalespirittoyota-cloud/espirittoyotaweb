import Banner from "./components/Banner";
import Enquiry from "./components/Enquiry";
import Range from "./components/Range";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Range />
      <Enquiry id='enquiry' />
    </main>
  );
}
