import { BriefcaseBusiness, Code2, Download } from 'lucide-react'
import { navItems, profile } from '../data/portfolio'

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06101d]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200">
            HA
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            Hamzeh Abedalqader
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-md border border-white/10 text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
          >
            <Code2 size={18} />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-md border border-white/10 text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
          >
            <BriefcaseBusiness size={18} />
          </a>
          <a
            href={profile.cvPath}
            download
            className="hidden h-10 items-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-[#07111f] transition hover:bg-cyan-100 sm:inline-flex"
          >
            <Download size={16} />
            CV
          </a>
        </div>
      </nav>
    </header>
  )
}
