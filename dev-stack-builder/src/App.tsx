import { useEffect, useState } from "react";
import TechnologyGrid from "./components/TechnologyGrid";
import technologyData from "./data/technologies.json";
import YourStack from "./components/YourStack";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import bannerStack from "./assets/banner-stack.png";
import { Menu, X } from "lucide-react";
import logoText from "./assets/logo-text.png";

function App() {
  const [selectedStack, setSelectedStack] = useState<number[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [technologies, setTechnologies] = useState<typeof technologyData>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTechnologies(technologyData);
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Toaster position="top-right" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="rounded-md p-2 text-slate-600 md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a href="#home" className="inline-flex items-center">
            <img
              src={logoText}
              alt="Dev Stack"
              className="h-9 w-auto object-contain"
            />
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-3 text-sm sm:gap-4">
            <button type="button" className="text-slate-600">
              Sign In
            </button>
            <button
              type="button"
              className="rounded-full bg-pink-600 px-4 py-2 text-white sm:px-5"
            >
              Sign Up
            </button>
          </div>

          {isMenuOpen && (
            <div className="absolute left-0 right-0 top-full border-t border-slate-100 bg-white p-3 shadow-lg md:hidden">
              {[
                ["Home", "#home"],
                ["Technologies", "#technologies"],
                ["Projects", "#projects"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-slate-700 hover:bg-pink-50 hover:text-pink-600"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <main id="home">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Build Your Ideal
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-5 max-w-lg leading-7 text-slate-500">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#technologies"
                className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white"
              >
                Explore Technologies
              </a>

              <a
                href="#technologies"
                className="rounded-lg border border-slate-200 px-5 py-3 text-sm text-slate-600"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={bannerStack}
              alt="Development stack illustration"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </section>

        {/* Technologies */}
        <section id="technologies" className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-7">
            <h2 className="text-3xl font-bold">
              Explore the <span className="text-pink-500">Technologies</span>
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {isLoading ? (
            <div
              className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-pink-50/40 to-violet-50/50 px-6 text-center"
              role="status"
              aria-live="polite"
            >
              {/* Soft background glow */}
              <div className="absolute -left-12 top-12 h-32 w-32 rounded-full bg-orange-200/30 blur-3xl" />
              <div className="absolute -right-12 bottom-8 h-40 w-40 rounded-full bg-purple-200/40 blur-3xl" />

              {/* Animated loader */}
              <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-orange-400 border-r-pink-500 border-b-purple-500" />

                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 shadow-inner" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-xl font-black text-white shadow-lg shadow-pink-200">
                  D
                </div>
              </div>

              {/* Loading text */}
              <h3 className="relative text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
                Loading{" "}
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Technologies...
                </span>
              </h3>

              <p className="relative mt-3 max-w-sm text-sm leading-6 text-slate-500">
                Preparing your tools to build the perfect development stack.
              </p>

              {/* Animated dots */}
              <div className="relative mt-6 flex items-center gap-2">
                <span className="h-2 w-2 animate-bounce rounded-full bg-orange-400" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-pink-500 [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-purple-500 [animation-delay:300ms]" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <TechnologyGrid
                  selectedStack={selectedStack}
                  setSelectedStack={setSelectedStack}
                />
              </div>

              <aside className="lg:sticky lg:top-6">
                <YourStack
                  selectedStack={selectedStack}
                  setSelectedStack={setSelectedStack}
                  technologies={technologies}
                />
              </aside>
            </div>
          )}
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
