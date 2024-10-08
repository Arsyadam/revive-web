import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Revive Benefits"
        title="Dukung Sustainable Fashion dengan Mitra Kami"
      >
        Revive adalah inisiatif yang bertujuan untuk mendukung industri fashion yang berkelanjutan melalui teknologi canggih dan kemitraan strategis
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Lihat bagaimana Revive bekerja"
      >
        Pahami lebih dekat bagaimana ekonomi sirkular di dalam ekosistem kami bekerja
      </SectionTitle>

      <Video videoId="jhnwJMgY6eM" />

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq /> */}
      <Cta />
    </Container>
  );
}
