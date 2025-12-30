"use client";

import Link from "next/link";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import {
  SiGithub,
  SiX,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiDocker,
  SiPython,
  SiHtml5,
  SiCss,
  SiAngular,
  SiSpringboot,
  SiGraphql,
  SiMysql,
  SiFirebase,
  SiGitlab,
  SiNginx,
  SiLinux,
  SiJira,
  SiSwagger,
} from "@icons-pack/react-simple-icons";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

export default function Home() {
  const { t } = useLanguage();

  const works = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      description:
        "Complete redesign of a React-based e-commerce platform with improved UX and performance.",
      date: "March, 2024",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "/e-commerce-dashboard.jpg",
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      description:
        "Native mobile app for fitness tracking with real-time analytics and social features.",
      date: "February, 2024",
      tags: ["React Native", "Node.js", "Firebase"],
      image: "/fitness-app-interface.jpg",
    },
    {
      id: 3,
      title: "Design System Components",
      description:
        "Built comprehensive component library and design documentation for enterprise client.",
      date: "January, 2024",
      tags: ["Storybook", "React", "CSS-in-JS"],
      image: "/design-system-components.jpg",
    },
  ];

  const posts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      description:
        "Best practices for structuring large React applications and managing state effectively.",
      date: "March, 2024",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Web Performance Optimization Tips",
      description:
        "A deep dive into modern web performance techniques and their real-world impact.",
      date: "February, 2024",
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "Getting Started with Next.js 15",
      description:
        "Exploring the new features and improvements in Next.js 15 and how to use them.",
      date: "January, 2024",
      readTime: "10 min read",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-lg sm:text-xl">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">{`MEDEVZ`}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 sm:gap-8">
            <Link
              href="#about"
              className="text-xs sm:text-sm hover:text-primary transition"
            >
              {t.nav.about}
            </Link>
            <Link
              href="#experiences"
              className="text-xs sm:text-sm hover:text-primary transition"
            >
              {t.nav.experiences}
            </Link>
            <Link
              href="#contact"
              className="text-xs sm:text-sm hover:text-primary transition"
            >
              {t.nav.contact}
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
          <div className="sm:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 pt-24 sm:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6 text-balance">
              {t.hero.title}
            </h1>
            <p className="text-base sm:text-lg md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
              <Button
                variant="outline"
                asChild
                size="lg"
                className="w-full sm:w-auto bg-transparent hover:text-primary border-primary"
              >
                <Link href="#contact">{t.hero.cta}</Link>
              </Button>
              <div className="flex gap-5 items-center">
                {/* add linkedin */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  <SiGithub className="w-5 h-5" />
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  <SiX className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-60 mx-auto">
            <Image
              width={40}
              height={40}
              src="/mohamedfaji.png"
              alt="Developer workspace"
              className="w-full rounded-full border border-border"
            />
          </div>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-16">
          <Marquee pauseOnHover className="[--duration:50s]">
            {[
              { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
              { name: "Python", icon: SiPython, color: "#3776AB" },
              { name: "Angular", icon: SiAngular, color: "#DD0031" },
              { name: "React", icon: SiReact, color: "#61DAFB" },
              { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
              { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
              { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
              { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
              { name: "Express.js", icon: SiExpress, color: "#000000" },
              { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
              { name: "SQL", icon: SiMysql, color: "#4479A1" },
              { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
              { name: "Firestore", icon: SiFirebase, color: "#FFCA28" },
              { name: "Docker", icon: SiDocker, color: "#2496ED" },
              { name: "GitLab CI/CD", icon: SiGitlab, color: "#FC6D26" },
              { name: "Nginx", icon: SiNginx, color: "#009639" },
              { name: "Linux", icon: SiLinux, color: "#FCC624" },
              { name: "Jira", icon: SiJira, color: "#0052CC" },
              { name: "Git", icon: SiGit, color: "#F05032" },
              { name: "Figma", icon: SiFigma, color: "#F24E1E" },
              { name: "Swagger", icon: SiSwagger, color: "#85EA2F" },
              { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
              { name: "React", icon: SiReact, color: "#61DAFB" },
              { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
              { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
              { name: "Express", icon: SiExpress, color: "#000000" },
              { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
              { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
              { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
              { name: "Figma", icon: SiFigma, color: "#F24E1E" },
              { name: "Git", icon: SiGit, color: "#F05032" },
              { name: "Docker", icon: SiDocker, color: "#2496ED" },
            ].map((tech, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-2 sm:gap-3 bg-secondary hover:bg-secondary/80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 mx-2 cursor-pointer hover:scale-105"
              >
                <tech.icon
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <span className="text-sm sm:text-base font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-border"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-balance">
          {t.about.title}
        </h2>
        <div className="">
          <div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              {t.about.description1}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t.about.description2}
            </p>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section
        id="experiences"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-border"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-balance">
          {t.experiences.title}
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {t.experiences.items.map((experience, index) => (
            <div
              key={index}
              className="relative pl-8 sm:pl-12 pb-8 sm:pb-12 border-l-2 border-border last:border-l-0 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                      {experience.role}
                    </h3>
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-sm sm:text-base font-medium text-primary/90">
                      {experience.company}
                    </span>
                    {/*<span className="hidden sm:inline text-muted-foreground">•</span>
             <span className="text-xs sm:text-sm px-2 py-1 bg-secondary text-foreground rounded-full w-fit">
              {experience.type}
            </span> */}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>

                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                  {experience.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 sm:gap-3 leading-relaxed"
                    >
                      <span className="text-primary mt-1.5 flex-shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Works Section */}
      {/* <section
        id="works"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-border"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-balance">
          {t.works.title}
        </h2>
        <div className="space-y-12 sm:space-y-16">
          {works.map((work) => (
            <div key={work.id} className="group">
              <div className="mb-4 sm:mb-6 overflow-hidden rounded-xl border border-border">
                <img
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  className="w-full h-40 sm:h-48 md:h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="flex flex-col gap-4 sm:gap-0">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition">
                    {work.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-secondary px-2 sm:px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground pt-2 sm:pt-0">
                  {work.date}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12">
          <Button
            variant="outline"
            asChild
            className="w-full sm:w-auto bg-transparent"
          >
            <Link href="#" className="gap-2">
              {t.works.viewAll} <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section> */}

      {/* Posts Section */}
      {/* <section
        id="posts"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-border"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-balance">
          {t.posts.title}
        </h2>
        <div className="space-y-4 sm:space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="pb-4 sm:pb-8 border-b border-border last:border-0 hover:bg-secondary/50 -mx-4 sm:-mx-6 px-4 sm:px-6 py-4 sm:py-6 rounded transition group cursor-pointer"
            >
              <div className="flex flex-col gap-2 sm:gap-4 sm:mb-3">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-primary transition">
                  {post.title}
                </h3>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {post.date}
                </div>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3 leading-relaxed">
                {post.description}
              </p>
              <span className="text-xs text-muted-foreground">
                {post.readTime}
              </span>
            </article>
          ))}
        </div>
        <div className="mt-8 sm:mt-12">
          <Button
            variant="outline"
            asChild
            className="w-full sm:w-auto bg-transparent"
          >
            <Link href="#" className="gap-2">
              {t.posts.readAll} <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section> */}

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-border"
      >
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
          <Button size="lg" asChild className="w-full sm:w-auto mb-8">
            <a href="mailto:hello@example.com" className="gap-2">
              <Mail className="w-4 h-4" />
              {t.contact.email}
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-border">
        <div className="flex flex-col gap-6 sm:gap-8 sm:items-center sm:justify-between sm:flex-row">
          <div className="text-xs sm:text-sm text-muted-foreground">
            <div>{t.footer.copyright}</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">
              <div className="flex items-center gap-2 mt-2">
                <span className="text-muted-foreground">Built with</span>
                <SiNextdotjs className="w-4 h-4" />
                <span className="text-muted-foreground">&</span>
                <SiTailwindcss className="w-4 h-4" style={{ color: "#06B6D4" }} />
              </div>
            </div>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <SiGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>

            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <SiX className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
