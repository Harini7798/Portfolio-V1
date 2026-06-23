import {
  Code2,
  Coffee,
  Github,
  Mail,
  FileCode2,
  Trophy,
  Instagram,
  Database,
  BarChart3,
  Brain,
  Menu,
  X,
  ArrowUp,
  GraduationCap,
  Sparkles,
  FileSpreadsheet,
  ExternalLink,
  ChefHat,
  Linkedin,
  Wrench,
  ScanLine,
} from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const EMAIL = 'aharini050805@gmail.com'
const INSTAGRAM = 'https://www.instagram.com/itsjustt.harini/'
const GITHUB = 'https://github.com/Harini7798'
const LINKEDIN = 'https://www.linkedin.com/in/harini-a-9006392a1/'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
]

/* Fade-up wrapper that reveals its children once they scroll into view. */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* Small uppercase label shown above a section heading. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-purple-500">
      <span className="h-px w-6 bg-purple-500/60" />
      {children}
    </span>
  )
}

const SKILLS = [
  {
    icon: Code2,
    title: 'Languages & Querying',
    items: ['Python', 'SQL'],
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    items: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Excel'],
  },
  {
    icon: Database,
    title: 'Libraries & Tools',
    items: ['Pandas', 'NumPy', 'Jupyter', 'Git'],
  },
  {
    icon: Brain,
    title: 'Core Concepts',
    items: ['Exploratory Data Analysis', 'Statistics', 'Data Cleaning', 'Dashboarding'],
  },
]

const PROJECTS = [
  {
    icon: Wrench,
    title: 'Fix It Up',
    description:
      'An eco-friendly peer-to-peer electronics repair and reuse platform for college campuses. It connects students with local student repairers (Fixers) to cut e-waste, save money and extend device lifespans.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Supabase'],
    demo: 'https://fix-it-up.vercel.app/',
    github: 'https://github.com/Harini7798/FIX-IT-UP',
  },
  {
    icon: ScanLine,
    title: 'XtractIQ',
    description:
      'An end-to-end intelligent document processing system that automatically extracts, structures and verifies data from scanned documents such as PDFs and images. Built during an internship and deployed as a full web application.',
    tags: ['Document AI', 'OCR', 'Data Extraction', 'Web App'],
    demo: 'https://xtract-iq-frontend.onrender.com/',
    github: 'https://github.com/Harini7798/Xtract-IQ-Forms',
  },
]

const PROFILES = [
  {
    icon: Github,
    title: 'GitHub',
    handle: '@Harini7798',
    description: 'Code & projects',
    href: GITHUB,
  },
  {
    icon: FileCode2,
    title: 'LeetCode',
    handle: 'BHLXj83WwH',
    description: 'Problem solving',
    href: 'https://leetcode.com/u/BHLXj83WwH/',
  },
  {
    icon: ChefHat,
    title: 'CodeChef',
    handle: 'harini_126',
    description: 'Competitive coding',
    href: 'https://www.codechef.com/users/harini_126',
  },
  {
    icon: Trophy,
    title: 'HackerRank',
    handle: 'ha9059',
    description: 'Coding challenges',
    href: 'https://www.hackerrank.com/profile/ha9059',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      setShowTop(window.scrollY > 500)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = ['home', ...NAV_LINKS.map((l) => l.href.slice(1))]
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black font-sans text-purple-100 selection:bg-purple-500/30">
      {/* Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-500/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#home" className="text-xl font-bold tracking-tight text-white">
            Harini<span className="text-purple-500">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? 'text-purple-400' : 'text-purple-200/80 hover:text-purple-400'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <a
            href={`mailto:${EMAIL}`}
            className="hidden rounded-lg bg-purple-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-purple-400 md:inline-block"
          >
            Let's Talk
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-purple-200 md:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-purple-500/20 bg-black/95 px-4 py-4 md:hidden">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-base font-medium text-purple-200/90 transition-colors hover:text-purple-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  onClick={() => setMenuOpen(false)}
                  className="inline-block rounded-lg bg-purple-500 px-5 py-2 text-sm font-semibold text-white"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-black"
      >
        {/* Grid + ambient glow */}
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-fuchsia-700/10 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4 py-32">
          <div className="flex flex-col items-center space-y-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
              <Sparkles className="h-4 w-4" />
              Available for internships & collaborations
            </span>

            <div className="space-y-4">
              <p className="text-lg font-light text-purple-200/80">Hi, I'm</p>
              <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Harini
                </span>
              </h1>
              <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600" />
            </div>

            <p className="max-w-2xl text-xl font-light text-purple-200 sm:text-2xl">
              Data Analytics Enthusiast <span className="text-purple-500">|</span> Problem
              Solver <span className="text-purple-500">|</span> Continuous Learner
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 rounded-lg bg-purple-500 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5 hover:bg-purple-400"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border-2 border-purple-500 px-8 py-4 font-semibold text-purple-400 transition-all hover:-translate-y-0.5 hover:bg-purple-500 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full scroll-mt-20 bg-neutral-950 py-28">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            <Reveal className="flex flex-col items-center space-y-4 text-center">
              <Eyebrow>Get to know me</Eyebrow>
              <h2 className="text-4xl font-bold text-white">
                About <span className="text-purple-500">Me</span>
              </h2>
              <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-purple-200/90">
                Hey there! I'm a second-year college student with a growing passion for
                data analytics. I love exploring patterns in data and turning raw numbers
                into meaningful insights. Right now I'm sharpening my skills in data
                analysis and visualization, and I'm excited to dive deeper into this
                fascinating field.
              </p>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: GraduationCap,
                  title: 'What I Do',
                  text: 'Clean, explore and visualize data to uncover the story behind the numbers.',
                },
                {
                  icon: Coffee,
                  title: "What I'm Learning",
                  text: 'Python, SQL, statistical analysis and modern data-visualization tools.',
                },
                {
                  icon: Code2,
                  title: 'My Journey',
                  text: 'Starting out in analytics and steadily building toward turning data into decisions.',
                },
              ].map((card, i) => (
                <Reveal key={card.title} delay={i * 100}>
                  <div className="group h-full rounded-2xl border border-purple-500/30 bg-black p-8 transition-all hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/5">
                    <card.icon className="mb-4 h-11 w-11 text-purple-500 transition-transform group-hover:scale-110" />
                    <h3 className="mb-2 text-xl font-semibold text-white">{card.title}</h3>
                    <p className="font-light leading-relaxed text-purple-200/80">{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full scroll-mt-20 bg-black py-28">
        <div className="container mx-auto px-4">
          <Reveal className="mb-16 flex flex-col items-center space-y-4 text-center">
            <Eyebrow>My toolkit</Eyebrow>
            <h2 className="text-4xl font-bold text-white">
              Skills & <span className="text-purple-500">Tools</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg font-light text-purple-200/90">
              The toolkit I'm building to turn data into insight
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((group, i) => (
              <Reveal key={group.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-purple-500/30 bg-neutral-950 p-6 transition-all hover:-translate-y-1 hover:border-purple-500">
                  <group.icon className="mb-4 h-9 w-9 text-purple-500" />
                  <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full scroll-mt-20 bg-neutral-950 py-28">
        <div className="container mx-auto px-4">
          <Reveal className="mb-16 flex flex-col items-center space-y-4 text-center">
            <Eyebrow>What I've built</Eyebrow>
            <h2 className="text-4xl font-bold text-white">
              Featured <span className="text-purple-500">Projects</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg font-light text-purple-200/90">
              A couple of projects I've designed, built and shipped end-to-end
            </p>
          </Reveal>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={i * 100}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-purple-500/20 bg-black transition-all hover:-translate-y-1 hover:border-purple-500/60">
                  <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-purple-900/60 to-fuchsia-900/30">
                    <project.icon className="h-16 w-16 text-purple-200 transition-transform group-hover:scale-110" />
                  </div>
                  <div className="flex flex-1 flex-col space-y-4 p-6">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="flex-1 font-light leading-relaxed text-purple-200/80">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
                      >
                        Live Demo <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
                      >
                        Code <Github className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section id="profiles" className="w-full scroll-mt-20 bg-black py-28">
        <div className="container mx-auto px-4">
          <Reveal className="mb-16 flex flex-col items-center space-y-4 text-center">
            <Eyebrow>Where I code</Eyebrow>
            <h2 className="text-4xl font-bold text-white">
              Coding <span className="text-purple-500">Profiles</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg font-light text-purple-200/90">
              Where I practice, build and share my problem-solving journey
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROFILES.map((profile, i) => (
              <Reveal key={profile.title} delay={i * 80}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-purple-500/30 bg-neutral-950 p-6 transition-all hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <profile.icon className="h-8 w-8 text-purple-500 transition-transform group-hover:scale-110" />
                    <ExternalLink className="h-4 w-4 text-purple-500/0 transition-colors group-hover:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{profile.title}</h3>
                  <p className="font-light text-purple-200/70">{profile.description}</p>
                  <p className="mt-3 text-sm text-purple-400/80">{profile.handle}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full scroll-mt-20 bg-neutral-950 py-28">
        <div className="container mx-auto px-4">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center space-y-8 text-center">
            <Eyebrow>Say hello</Eyebrow>
            <h2 className="text-4xl font-bold text-white">
              Let's <span className="text-purple-500">Connect</span>
            </h2>
            <p className="text-lg font-light leading-relaxed text-purple-200/90">
              Have an opportunity, a project idea, or just want to say hi? My inbox is
              always open — I'd love to hear from you.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-lg bg-purple-500 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5 hover:bg-purple-400"
            >
              <Mail className="h-5 w-5" />
              {EMAIL}
            </a>
            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-purple-500/30 p-3 text-purple-400 transition-all hover:-translate-y-0.5 hover:border-purple-500 hover:text-purple-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-purple-500/30 p-3 text-purple-400 transition-all hover:-translate-y-0.5 hover:border-purple-500 hover:text-purple-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-purple-500/30 p-3 text-purple-400 transition-all hover:-translate-y-0.5 hover:border-purple-500 hover:text-purple-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email"
                className="rounded-full border border-purple-500/30 p-3 text-purple-400 transition-all hover:-translate-y-0.5 hover:border-purple-500 hover:text-purple-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/15 bg-black py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm text-purple-200/60 sm:flex-row">
          <p>
            <span className="font-semibold text-white">Harini</span>
            <span className="text-purple-500"> · </span>
            Data Analytics Portfolio
          </p>
          <p className="flex items-center gap-1.5">
            Built with <FileSpreadsheet className="h-4 w-4 text-purple-500" /> &amp; React
            · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      {showTop && (
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-purple-500 p-3 text-white shadow-lg shadow-purple-500/30 transition-all hover:-translate-y-0.5 hover:bg-purple-400"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}

export default App
