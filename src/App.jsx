import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <footer className="py-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Thomas Léon — Tous droits réservés.
        </footer>
      </main>
    </div>
  )
}
