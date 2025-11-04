import { useState } from "react"
import { Menu } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)
  const link = "hover:text-white transition-colors"
  const items = [
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#skills", label: "Compétences" },
    { href: "#contact", label: "Contact" },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-800/60 bg-night/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-wide">Thomas <span className="text-accent">Léon</span></a>
        <nav className="hidden md:flex gap-8 text-slate-300">
          {items.map(i => (
            <a key={i.href} href={i.href} className={link}>{i.label}</a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu">
          <Menu className="w-6 h-6 text-slate-300" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-800/60">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-3 text-slate-300">
            {items.map(i => (
              <a key={i.href} href={i.href} className="hover:text-white" onClick={() => setOpen(false)}>{i.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
