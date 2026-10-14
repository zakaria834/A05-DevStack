import { useState } from "react";
import TechnologyGrid from "./components/TechnologyGrid";
import technologies from "./data/technologies.json";
import YourStack from "./components/YourStack";
import { Toaster } from "react-hot-toast";
function App() {
  const [selectedStack, setSelectedStack] = useState<number[]>([]);
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Toaster position="top-right" />
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold">
            <span className="text-purple-600">DS</span> Dev{" "}
            <span className="text-pink-500">Stack</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#" className="text-pink-500">
              Home
            </a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <button className="text-slate-600">Sign In</button>
            <button className="rounded-full bg-pink-600 px-5 py-2 text-white">
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
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
              src="/src/assets/hero.png"
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
        </section>
      </main>
    </div>
  );
}

export default App;
