"use client";

import React from "react";

import { companies, testimonials, contact } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { Timeline } from "./ui/timeline";
import Image from "next/image";

const TimeLine = () => {
  const data = [
    {
      title: process.env.NEXT_PUBLIC_GRADUATION_YEAR || "2026",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl mb-4">
            {contact.fullName || "Your Name"} — {process.env.NEXT_PUBLIC_DEGREE || "Degree"}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mb-4">
            {process.env.NEXT_PUBLIC_UNIVERSITY || "University"} — CGPA: {process.env.NEXT_PUBLIC_CGPA || "-"}
          </p>
          <p className="py-2">
            {process.env.NEXT_PUBLIC_ACHIEVEMENT_3 || "Published work / chapter"}
          </p>
        </div>
      ),
    },
    {
      title: "Recent",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            {process.env.NEXT_PUBLIC_TAGLINE || "Full-Stack Developer"}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mb-4">
            {process.env.NEXT_PUBLIC_HERO_DESCRIPTION || "Short professional summary goes here."}
          </p>
          <div className="mb-4">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {process.env.NEXT_PUBLIC_ACHIEVEMENT_1 && <li>{process.env.NEXT_PUBLIC_ACHIEVEMENT_1}</li>}
              {process.env.NEXT_PUBLIC_ACHIEVEMENT_2 && <li>{process.env.NEXT_PUBLIC_ACHIEVEMENT_2}</li>}
              {process.env.NEXT_PUBLIC_ACHIEVEMENT_4 && <li>{process.env.NEXT_PUBLIC_ACHIEVEMENT_4}</li>}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Freelance",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Worked with multiple online and offline clients
          </p>
          <p>
            As a freelancer since 2022, I take on projects across web development, AI integrations and system design — delivering production-ready solutions.
          </p>
        </div>
      ),
    },
  ];
  return (
    <section id="experience" className="py-20">
      <Timeline data={data} />
    </section>
  );
};

export default TimeLine;
