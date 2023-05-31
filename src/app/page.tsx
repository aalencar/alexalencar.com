import Image from "next/image";
import HeroImage from "@/assets/hero2.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 px-8 md:flex-row">
      <Image
        className="rounded-xl"
        height={300}
        src={HeroImage}
        alt="Alex Alencar Profile Picture"
      />
      <section className="">
        <h2 className="text-3xl">Hello there 👋</h2>
        <p>
          My name is Alex and I am a software developer since 2015. I consider
          myself a creative individual that is constantly pursuing challenges. I
          love to build things in all shapes and forms.
        </p>
        <br />
        <p>
          I use this website to showcase my work, write articles about coding
          and express myself creatively.
        </p>
      </section>
    </main>
  );
}
