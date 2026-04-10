export const runtime = 'edge';

import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Hero } from "../../components/home/Hero";
import { TrustStrip } from "../../components/home/TrustStrip";
import { Categories } from "../../components/home/Categories";
import { About } from "../../components/home/About";
import { HowItWorks } from "../../components/home/HowItWorks";
import { ContactStrip } from "../../components/home/ContactStrip";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Categories />
        <About />
        <HowItWorks />
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}
