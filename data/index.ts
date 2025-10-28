// NOTE: we intentionally reference `process.env.NEXT_PUBLIC_*` directly so Next.js
// can inline public environment variables at build time. Avoid creating a
// runtime `ENV` wrapper which can be an empty object in the browser.

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Recent Project - LinkedIn Clone",
    description:
      "Built with MERN stack featuring advanced authentication and real-time interactions",
    className:
      "lg:col-span-3 text-black md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/linkedin-clone.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zones & remote collaboration",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "MERN, Next.js, TypeScript, AI APIs",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about building scalable, user-focused solutions",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently exploring AI integration and system design",
    description: "Building intelligent applications",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to collaborate on your next project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "LinkedIn Clone",
    des: "Full-featured social networking platform with MERN stack, featuring advanced authentication, real-time notifications, and responsive design.",
    img: "/linkedin-clone.png",
    iconLists: ["/re.svg", "/node.svg", "/mongo.svg", "/tail.svg"],
    link: "https://unlinkedd.mksinha.info/",
  },
  {
    id: 2,
    title: "PhotoZone WebApp",
    des: "AI-powered image manipulation platform using Cloudinary API for generative fill, background removal, and image restoration.",
    img: "/photozone.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/c.svg"],
    link: "https://photo-zone.vercel.app/",
  },
  {
    id: 3,
    title: "Shorts Generation WebApp",
    des: "One-click AI video generation platform powered by Gemini, Assembly AI, and ElevenLabs APIs with Remotion rendering.",
    img: "/shorts-generator.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/stream.svg"],
    link: "https://shorts-generation.vercel.app/",
  },
  {
    id: 4,
    title: "3D Portfolio",
    des: "Interactive 3D portfolio experience built with React Three Fiber, showcasing projects in a gamified environment.",
    img: "/3d-portfolio.png",
    iconLists: ["/re.svg", "/three.svg", "/tail.svg"],
    link: "https://portfolio.mksinha.info/",
  },
  {
    id: 5,
    title: "Social Media WebApp",
    des: "Anonymous social platform with real-time chat and posting features, built with React and Firebase.",
    img: "/socialmedia.png",
    iconLists: ["/re.svg", "/firebase.svg", "/tail.svg"],
    link: process.env.NEXT_PUBLIC_SOCIAL_MEDIA_URL || "/project/socialMedia",
  },
];

export const testimonials = [
  {
    quote:
      "Manish demonstrated exceptional problem-solving skills during our hackathon. His ability to rapidly prototype and implement full-stack solutions was impressive.",
    name: "Hackathon Judge",
    title: "NIU Hackathon 2022",
  },
  {
    quote:
      "His work on AI-integrated applications shows a deep understanding of modern web technologies and innovative thinking.",
    name: "Project Reviewer",
    title: "KR Mangalam University",
  },
];

export const companies = [
  {
    id: 1,
    name: "Next.js",
    img: "/next.svg",
    nameImg: "/nextName.svg",
  },
  {
    id: 2,
    name: "React",
    img: "/re.svg",
    nameImg: "/reactName.svg",
  },
  {
    id: 3,
    name: "MongoDB",
    img: "/mongo.svg",
    nameImg: "/mongoName.svg",
  },
  {
    id: 4,
    name: "Node.js",
    img: "/node.svg",
    nameImg: "/nodeName.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    img: "/ts.svg",
    nameImg: "/tsName.svg",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Hackathon Finalist - 2025",
    desc: "Built AI-powered work allocation system at KR Mangalam University",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Published Author - 2024-25",
    desc: "Hash Function & Message Digest - Taylor & Francis",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Hackathon Finalist - 2022",
    desc: "Created 3D educational game in Unreal Engine at NIU",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance Video Editor",
    desc: "Professional video editing services for online & offline clients",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/msinha569",
  },
  {
    id: 2,
    img: "/link.svg",
    link:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      "https://linkedin.com/in/msinha569",
  },
  {
    id: 3,
    img: "/twit.svg",
    link: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/",
  },
];

export const contact = {
  fullName: process.env.NEXT_PUBLIC_FULL_NAME || "Your Name",
  email: process.env.NEXT_PUBLIC_EMAIL || "your.email@example.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  phoneAlt: process.env.NEXT_PUBLIC_PHONE_ALT || "",
  location: process.env.NEXT_PUBLIC_LOCATION || "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/msinha569",
  linkedIn:
    process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/msinha569",
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "",
};

// Contact details (update these with your personal info)
// (contact is exported above and reads from environment variables)
