import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { AdmissionsCta } from "@/components/site/CtaGroup";
import { SITE_URL } from "@/lib/school";
import heroImage from "@/assets/hero-8.jpeg";
import upper from "@/assets/upper.jpeg";
import kindergartenImg from "@/assets/kindergarten.jpeg";
import jss from "@/assets/jss.jpeg";
import hero6 from "@/assets/hero-6.jpeg";
import hero7 from "@/assets/hero-7.jpeg";
import hero9 from "@/assets/hero-9.jpeg";
import hero10 from "@/assets/hero-10.jpeg";
import park1 from "@/assets/park1.jpeg";
import park2 from "@/assets/park2.jpeg";
import park3 from "@/assets/park3.jpeg";
import computerLab from "@/assets/computer-lab.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import diningHall from "@/assets/dining-hall.jpg";
import karate from "@/assets/karate.jpg";
import chess from "@/assets/chess.jpg";
import taekwondo from "@/assets/taekwondo.jpg";
import swimming from "@/assets/swimming.jpg";
import skating from "@/assets/skating.jpg";
import urbanDance from "@/assets/urban-dance.jpg";
import music from "@/assets/music.jpg";
import french from "@/assets/french.jpg";
import german from "@/assets/german.jpg";

const title = "Gallery — Embakasi Benedicta Academy, Utawala";
const description =
  "Photographs of learning, facilities, sport, clubs and school life at Embakasi Benedicta Academy in Utawala.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/gallery` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
  }),
  component: GalleryPage,
});

type Item = { src: string; alt: string; caption: string };

const groups: { title: string; description: string; items: Item[] }[] = [
  {
    title: "Learning and classrooms",
    description: "Everyday teaching and learning across our school levels.",
    items: [
      { src: upper, alt: "Learners in a primary classroom", caption: "Primary classroom" },
      { src: kindergartenImg, alt: "Kindergarten learners at play-based learning", caption: "Kindergarten" },
      { src: jss, alt: "Junior school learners in a lesson", caption: "Junior School" },
      { src: hero6, alt: "The Academy campus in Utawala", caption: "Our campus" },
    ],
  },
  {
    title: "Facilities",
    description: "The spaces that support learning, health and wellbeing.",
    items: [
      { src: computerLab, alt: "Learners working in the computer laboratory", caption: "Computer laboratory" },
      { src: scienceLab, alt: "Learners carrying out an experiment in the science laboratory", caption: "Science laboratory" },
      { src: diningHall, alt: "Learners having a meal in the school dining hall", caption: "Dining facility" },
      { src: hero7, alt: "Green outdoor space on the campus", caption: "Outdoor spaces" },
    ],
  },
  {
    title: "Co-curricular activities",
    description: "Sport, martial arts, performance and clubs beyond the classroom.",
    items: [
      { src: karate, alt: "Learners practising karate in the school hall", caption: "Karate" },
      { src: taekwondo, alt: "Learners practising taekwondo", caption: "Taekwondo" },
      { src: chess, alt: "Learners playing chess in the chess club", caption: "Chess" },
      { src: swimming, alt: "Learners in a swimming lesson", caption: "Swimming" },
      { src: skating, alt: "Learners skating with helmets and pads", caption: "Skating" },
      { src: urbanDance, alt: "Learners in an urban dance session", caption: "Urban dance" },
      { src: music, alt: "Learners in a music lesson with instruments", caption: "Music" },
      { src: hero10, alt: "Learners taking part in school activities", caption: "School activities" },
    ],
  },
  {
    title: "Foreign languages",
    description: "French and German lessons at the Academy.",
    items: [
      { src: french, alt: "A French language lesson in progress", caption: "French" },
      { src: german, alt: "A German language lesson in progress", caption: "German" },
    ],
  },
  {
    title: "School life and the amusement park",
    description: "Events, celebrations and supervised play on our grounds.",
    items: [
      { src: hero9, alt: "A school event at the Academy", caption: "School events" },
      { src: park1, alt: "Children in the kids amusement park", caption: "Amusement park" },
      { src: park2, alt: "Play equipment in the kids amusement park", caption: "Supervised play" },
      { src: park3, alt: "Children enjoying the amusement park rides", caption: "Rides" },
    ],
  },
];

function GalleryPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Gallery"
        title="Our school in pictures"
        description="A look at learning, facilities, sport and school life at the Academy."
        image={heroImage}
        imageAlt="Learners at Embakasi Benedicta Academy"
        crumbs={[{ name: "Gallery" }]}
      />

      {groups.map((g, i) => (
        <Section key={g.title} muted={i % 2 === 1}>
          <SectionHeading title={g.title} description={g.description} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {g.items.map((item) => (
              <figure
                key={item.caption + item.src}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="p-4 text-center text-sm font-semibold text-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ))}

      <AdmissionsCta
        title="See it for yourself"
        description="Book a school visit and walk through the Academy with us."
      />
    </Layout>
  );
}
