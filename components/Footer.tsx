import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia, contact } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-10 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to bring <span className="text-purple">your ideas</span> to life with cutting-edge technology?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s connect and discuss how I can help you build amazing full-stack applications with MERN, Next.js, and AI integration.
        </p>
        <a href={`mailto:${contact.email}`}>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center max-w-6xl mx-auto w-full px-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright (c) {new Date().getFullYear()} {contact.fullName || "Your Name"}. All rights reserved.
        </p>

        <div className="flex gap-4 items-center">
          {socialMedia.map((s) => (
            <a
              key={s.id}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.link}
              className="inline-block"
            >
              <img src={s.img} alt={`social-${s.id}`} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;