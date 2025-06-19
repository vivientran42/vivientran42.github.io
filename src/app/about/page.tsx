"use client";

import { useState } from "react";
import Head from "next/head";
import Inline from "@/components/inline";
import Modal from "@/components/modal";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
            <h1 className="text-slate-600 mb-2 md:mb-4 text-xl sm:text-2xl sm:text-2xl lg:text-3xl leading-relaxed">
              Hello! I'm Vivien.{" "}
            </h1>
          }
          bullet={false}
          imageSrc="/me.jpg"
          imageAlt="Picture of me (Vivien Tran)."
        />

        <h1 className="text-slate-600 mb-2 md:mb-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
          A software engineer living in London, UK from Melbourne/Naarm,
          Australia.
        </h1>

        <div className="mt-5 md:mt-8"></div>

        <Inline
          text={
            <h1 className="text-slate-600 mb-2 md:mb-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Currently working at{" "}
              <a
                href="https://www.anz.com.au/plus/"
                target="_blank"
                className="hover:text-pink-500 hover:underline decoration-wavy active:text-pink-500 active:underline decoration-wavy transition duration-150"
              >
                ANZ Plus
              </a>{" "}
              on the{" "}
              <a
                href="https://www.anz.com.au/plus/benefits/add-ons/"
                target="_blank"
                className="hover:text-pink-500 hover:underline decoration-wavy active:text-pink-500 active:underline decoration-wavy transition duration-150"
              >
                Add-Ons feature
              </a>
              .
            </h1>
          }
          bullet={false}
          imageSrc="/laptop.jpg"
          imageAlt="Picture of a laptop and lanyard on grass."
        />

        <div className="mt-5 md:mt-8"></div>

        <h1 className="text-slate-600 mb-2 md:mb-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
          Shaped by a diverse background (
          <button
            className="px-2 rounded-lg bg-slate-100 hover:bg-yellow-100 hover:scale-105 text-slate-600 text-sm lg:text-lg align-middle transition duration-150"
            onClick={handleOpen}
          >
            MORE?
          </button>
          ), I bring an engineering mindset paired with a deep awareness of how
          businesses operate.
        </h1>

        {isOpen && (
          <Modal
            isOpen={isOpen}
            onClose={handleClose}
            children={
              <div>
                <Inline
                  text={
                    <p className="text-lg text-slate-600 mb-1">Gathering requirements for Salesforce features</p>
                  }
                  bullet={true}
                  bulletSize="small"
                />
                <Inline
                  text={
                    <p className="text-lg text-slate-600 mb-1">Coordinating regulatory engagements</p>
                  }
                  bullet={true}
                  bulletSize="small"
                />
                 <Inline
                  text={
                    <p className="text-lg text-slate-600 mb-1">
                      Executive reporting on tech risk
                    </p>
                  }
                  bullet={true}
                  bulletSize="small"
                />
                        <Inline
                  text={
                    <p className="text-lg text-slate-600">
                      Strategising intern recruitment and onboarding
                    </p>
                  }
                  bullet={true}
                  bulletSize="small"
                />
              </div>
            }
          />
        )}

        <div className="mt-5 md:mt-8"></div>

        <h1 className="text-slate-600 mb-2 md:mb-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
          I love problem solving, exercising creativity, and working on products
          that I care about.
        </h1>

        <div className="mt-5 md:mt-8"></div>

        <h1 className="text-slate-600 mb-2 md:mb-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
          Some other things I enjoy:
        </h1>

        <Inline
          text={
            <h1 className="text-slate-600 mb-2 md:mb-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Design
            </h1>
          }
          bullet={true}
        />

        <Inline
          text={
            <h1 className="text-slate-600 mb-2 md:mb-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Ice cream{" "}
            </h1>
          }
          bullet={true}
          imageSrc="/icecream.jpg"
          imageAlt="Picture of two ice cream scoops."
        />

        <Inline
          text={
            <h1 className="text-slate-600 mb-2 md:mb-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Watching movies
            </h1>
          }
          bullet={true}
        />

        <Inline
          text={
            <h1 className="text-slate-600 mb-2 md:mb-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Architecture{" "}
            </h1>
          }
          bullet={true}
          imageSrc="/architecture.jpg"
          imageAlt="Picture of a brutalist building."
        />

        <Inline
          text={
            <h1 className="text-slate-600 mb-2 md:mb-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Listening to music{" "}
            </h1>
          }
          bullet={true}
          imageSrc="/spotify.jpg"
          imageAlt="Screenshot of Spotify Wrapped."
        />

        <Inline
          text={
            <h1 className="text-slate-600 mb-2 md:mb-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Reading{" "}
            </h1>
          }
          bullet={true}
          imageSrc="/books.jpg"
          imageAlt="Picture of some books."
        />
      </div>
    </div>
  );
}
