/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  MenuIcon,
  XIcon,
  ArrowUpIcon,
  CodeIcon,
  PenToolIcon,
  DatabaseIcon,
  MoonIcon,
  SunIcon,
  BracesIcon,
  FileTextIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the form data to your backend
  };

  const projects = [
    {
      title: "LeetCode Buddy ",
      description:
        "A browser extension to make peer coding with LeetCode easier",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*W_4Of01mOUSTv3eX0YIdzg.jpeg",
      details:
        "LeetCode Buddy is a browser extension that makes peer coding with LeetCode easier. It allows you to track your coding partner's progress to help you with peer coding. On top you don't need to authenticate separately!",
      github: "https://github.com/ShubhamVishwakarma11/LeetCode-Buddy",
      icon: <CodeIcon className="w-12 h-12 text-purple-600" />,
      link: "https://www.youtube.com/watch?v=cC-lnd2idXQ",
    },
    {
      title: "TantraFiesta 2022",
      description:
        "Tantrafiesta 2022 is the website for the Annual Technical Fest of IIIT Nagpur. ",
      image:
        "https://scontent.fblr2-3.fna.fbcdn.net/v/t39.30808-6/306564342_1457904131374879_4253558510397166064_n.png?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=vr_kNeSXJo0Q7kNvgGjNISW&_nc_ht=scontent.fblr2-3.fna&oh=00_AYASWHJ8RLzXmIF8_g3jUFu6FT4EDetaJ5It9ZILIw3ZzA&oe=66E560E4",
      details:
        "Tantrafiesta 2022 is the website for the Annual Technical Fest of IIIT Nagpur. It is a website where you can find all the information about the fest. It is a website where you can find all the information about the fest. It is a website where you can find all the information about the fest. ",
      github: "https://github.com/ShubhamVishwakarma11/TF2022",
      icon: <PenToolIcon className="w-12 h-12 text-pink-600" />,
      link: "https://2022.tantrafiesta.in/",
    },
    {
      title: "onlyIIITN",
      description:
        "onlyfans version for IIITN. This is a work in progress project",
      image:
        "https://res.cloudinary.com/dxluppmld/image/upload/v1725922454/eerxrgnwmnbfgaylnrlp.png",
      details: "Work in progress ...",
      github: "https://github.com/ShubhamVishwakarma11/onlyiiitn-app",
      icon: <DatabaseIcon className="w-12 h-12 text-purple-600" />,
      link: "https://github.com/ShubhamVishwakarma11/onlyiiitn-app",
    },
  ];

  const blogPosts = [
    {
      title: "How I made my portfolio website using v0 ",
      excerpt:
        "I'll show you how you can make a personalportfolio website using v0 within ...",
      content:
        "In this post, we dive deep into the emerging trends that are shaping the future of web development. From the rise of JAMstack architectures to the increasing adoption of WebAssembly, we explore how these technologies are changing the way we build and deploy web applications. We also discuss the impact of AI and machine learning on web development, and how developers can prepare for these changes.",
    },
    {
      title: "Optimizing React Performance",
      excerpt: "Tips and tricks to make your React apps blazing fast...",
      content:
        "Performance is crucial for providing a great user experience. In this article, we cover various techniques to optimize your React applications. We discuss the importance of code splitting, the use of React.memo and useMemo for preventing unnecessary re-renders, and how to leverage the new React Concurrent Mode for improved responsiveness. We also provide practical examples and benchmarks to illustrate the impact of these optimizations.",
    },
    {
      title: "Introduction to GraphQL",
      excerpt: "Understanding the basics of GraphQL and its benefits...",
      content:
        "GraphQL has been gaining popularity as an alternative to REST APIs. This post provides a comprehensive introduction to GraphQL, explaining its core concepts such as schemas, queries, and mutations. We discuss the benefits of GraphQL, including reduced over-fetching of data and the ability to request multiple resources in a single query. The article also includes a step-by-step guide to setting up a basic GraphQL server and making queries from a React client.",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Python",
    "Tailwind CSS",
    "ExpressJS",
    "SQL",
    "MongoDB",
    "GraphQL",
    "Generative AI",
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600"
        />
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-background to-purple-50 dark:from-gray-900 dark:to-gray-950 text-foreground ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-300 dark:bg-yellow-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <header className="sticky top-0 z-40 w-full flex justify-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <a href="#" className="flex items-center space-x-2">
              <span className="inline-block font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Shubham Vishwakarma
              </span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button
                variant="ghost"
                className="hidden md:inline-flex"
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="hidden md:inline-flex"
                onClick={() => {
                  const skillsSection = document.getElementById("skills");
                  if (skillsSection) {
                    skillsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                className="hidden md:inline-flex"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                className="hidden md:inline-flex"
                onClick={() => {
                  const blogSection = document.getElementById("blog");
                  if (blogSection) {
                    blogSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Blog
              </Button>
              <Button
                variant="ghost"
                className="hidden md:inline-flex"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact
              </Button>
              <div className="justify-center items-center gap-1 hidden md:inline-flex">
                <span>{isDarkMode && <SunIcon className="w-4 h-4" />}</span>
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={toggleDarkMode}
                  aria-label="Toggle dark mode"
                />
                <span>{!isDarkMode && <MoonIcon className="w-4 h-4" />}</span>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden absolute right-4"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <XIcon className="h-4 w-4 " />
                ) : (
                  <MenuIcon className="h-4 w-4" />
                )}
              </Button>
            </nav>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="container md:hidden  min-h-screen bg-white/95 dark:bg-slate-950/95 backdrop-blur min-w-[200px] max-w-[90%]  absolute right-4 top-[5rem] z-[999] rounded-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMenuOpen(false);
                }}
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  const skillsSection = document.getElementById("skills");
                  if (skillsSection) {
                    skillsSection.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMenuOpen(false);
                }}
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMenuOpen(false);
                }}
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  const blogSection = document.getElementById("blog");
                  if (blogSection) {
                    blogSection.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMenuOpen(false);
                }}
              >
                Blog
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </Button>
              <div className="flex w-full justify-start items-center gap-1 pl-4 py-2">
                <span>{isDarkMode && <SunIcon className="w-4 h-4" />}</span>
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={toggleDarkMode}
                  aria-label="Toggle dark mode"
                />
                <span>{!isDarkMode && <MoonIcon className="w-4 h-4" />}</span>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="container mx-auto px-4 py-8 relative">
        <motion.section
          id="about"
          className="py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1MVBFznpVFqTTz1PiJA17NIvkgR0L9VHj"
                  alt="Shubham Vishwakarma"
                  objectFit="cover"
                  className="rounded-full"
                  width={180}
                  height={180}
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text animate-text">
                  Shubham Vishwakarma
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Full Stack Developer passionate about creating innovative web
                  solutions
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center space-x-4">
                  <Link
                    href="https://github.com/ShubhamVishwakarma11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <GithubIcon className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/shubhamvish/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <LinkedinIcon className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://x.com/shubhamvishh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <TwitterIcon className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://www.instagram.com/shubhamvishhh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <InstagramIcon className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </Link>
                </div>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/12dKUUDrxPU5b-gNnBanbEO9EHMfsWs2A/view?usp=drivesdk",
                      "_blank"
                    )
                  }
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="overflow-hidden transition-transform duration-200">
                    <div className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        {project.icon}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <Link href={project.link}>
                        <Button variant="outline">View Project</Button>
                      </Link>
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline">
                          <GithubIcon className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="blog"
          className="py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Latest Blog Posts
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="transition-transform duration-200">
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/blog/${index}`}>
                        <Button variant="outline">Read More</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Contact Me
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Get in touch</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  // onSubmit={() => handleSubmit(onSubmit)}
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Form submitted");
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name">First name</label>
                      <Input
                        id="first-name"
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                      />
                      {errors.firstName && (
                        <p role="alert" className="text-sm text-red-500">
                          {errors.firstName.message?.toString()}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name">Last name</label>
                      <Input
                        id="last-name"
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                        aria-invalid={errors.lastName ? "true" : "false"}
                      />
                      {errors.lastName && (
                        <p role="alert" className="text-sm text-red-500">
                          {errors.lastName.message?.toString()}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p role="alert" className="text-sm text-red-500">
                        {errors.email.message?.toString()}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message">Message</label>
                    <Textarea
                      id="message"
                      {...register("message", {
                        required: "Message is required",
                      })}
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && (
                      <p role="alert" className="text-sm text-red-500">
                        {errors.message.message?.toString()}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded transition-all duration-200 ease-in-out transform "
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>

      <footer className="border-t w-full flex justify-center">
        <div className="container flex flex-col gap-2 py-10 md:flex-row md:gap-4">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 Shubham Vishwakarma. All rights reserved.
          </p>
          <nav className="flex items-center justify-center gap-4 md:ml-auto md:gap-2 md:justify-end">
            <Link
              href="https://github.com/ShubhamVishwakarma11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <GithubIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/shubhamvish/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <LinkedinIcon className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link
              href="https://x.com/shubhamvishh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <TwitterIcon className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link
              href="https://www.instagram.com/shubhamvishhh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <InstagramIcon className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
          </nav>
        </div>
      </footer>

      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="fixed bottom-4 right-4 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-200"
              onClick={scrollToTop}
            >
              <ArrowUpIcon className="h-4 w-4" />
              <span className="sr-only">Back to top</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
