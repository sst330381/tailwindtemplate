import Hero1 from "@/components/heros/hero1";
import Price1 from "@/components/pricing/pricing1";
import Testimonial1 from "@/components/testimonials/testimonial1";
import Footer from "@/components/footer";
import Faq from "@/components/faq"
import Stats from "@/components/stats"
import Avatars from "@/components/avatars"
import Cta from "@/components/cta"
import Feature from "@/components/feature"
import Logoclouds from "@/components/logoclouds"
import { heroparams, allprice } from "@/app/lib/staticdata";

export default function Home() {
  return (
    <>
      <Hero1 props={heroparams} />
      <Logoclouds/>
      <Feature/>
      {/* <Avatars/> */}
      {/* <Stats/> */}
      <Testimonial1 />
      <Price1 allprice={allprice} />
      <Faq/>
      <Cta/>
      <Footer/>
    </>
  );
}
