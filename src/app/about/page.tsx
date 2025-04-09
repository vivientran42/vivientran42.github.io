import Head from "next/head";
import Inline from "@/components/inline";

export default function About() {
  return (
    <div className="bg-stone-50">
      <Head>
        <link rel="preload" href="/me.jpeg" as="image" />
        <link rel="preload" href="/laptop.jpeg" as="image" />
        <link rel="preload" href="/icecream.jpeg" as="image" />
        <link rel="preload" href="/ciudad.jpeg" as="image" />
        <link rel="preload" href="/book.jpeg" as="image" />
        <link rel="preload" href="/spotify.jpeg" as="image" />
      </Head>
      <div className="flex min-h-screen flex-col items-start px-16 md:px-36 py-16 mb-12 bg-stone-50">
        <Inline
          text={
            <h1 className="text-slate-600 text-xl sm:text-2xl sm:text-2xl lg:text-3xl leading-relaxed">
              Hello! I'm Vivien.{" "}
            </h1>
          }
          bullet={false}
          imageSrc="/me.jpg"
          imageAlt="Picture of the author"
        />

        <h1 className="text-slate-600 mb-2 md:mb-3 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
          A software engineer living in London, UK from Melbourne/Naarm, Australia.
        </h1>

        <Inline
          text={
            <h1 className="text-slate-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Currently working at{" "}
              <a
                href="https://www.anz.com.au/plus/"
                target="_blank"
                className="hover:text-pink-400 hover:underline decoration-wavy transition duration-150"
              >
                ANZ Plus
              </a>{" "}
              on the{" "}
              <a
                href="https://www.anz.com.au/plus/benefits/add-ons/"
                target="_blank"
                className="hover:text-pink-400 hover:underline decoration-wavy transition duration-150"
              >
                Add-Ons feature
              </a>
              .
            </h1>
          }
          bullet={false}
          imageSrc="/laptop.jpg"
          imageAlt="Picture of the author"
        />

        <div className="mt-5 md:mt-8"></div>

        <h1 className="text-slate-600 mb-2 md:mb-3 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
          I love problem solving, exercising creativity, and working on products that I care about.
        </h1>

        <div className="mt-5 md:mt-8"></div>

        <h1 className="text-slate-600 mb-2 md:mb-3 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
          Some other things I enjoy:
        </h1>

        <Inline
          text={
            <h1 className="text-slate-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              <a
                href={`/designing`}
                className="hover:text-pink-400 hover:underline decoration-wavy transition duration-150"
              >
                Graphic design
              </a>
            </h1>
          }
          bullet={true}
        />

        <Inline
          text={
            <h1 className="text-slate-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Eating ice cream{" "}
            </h1>
          }
          bullet={true}
          imageSrc="/icecream.jpg"
          imageAlt="Picture of the author"
        />

        <Inline
          text={
            <h1 className="text-slate-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Bodies of water{" "}
            </h1>
          }
          bullet={true}
        />

        <Inline
          text={
            <h1 className="text-slate-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Listening to music all day{" "}
            </h1>
          }
          bullet={true}
          imageSrc="/spotify.jpg"
          imageAlt="Picture of the author"
        />  

        <Inline
          text={
            <h1 className="text-slate-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Reading{" "}
            </h1>
          }
          bullet={true}
          imageSrc="/books.jpg"
          imageAlt="Picture of the author"
        />

        <Inline
          text={
            <h1 className="text-slate-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Architecture{" "}
            </h1>
          }
          bullet={true}
          imageSrc="/architecture.jpg"
          imageAlt="Picture of the author"
        />   

        <Inline
          text={
            <h1 className="text-slate-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Watching movies
            </h1>
          }
          bullet={true}
        />
      </div>
    </div>
  );
}
