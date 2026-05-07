import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin, Sparkles } from 'lucide-react'
import heroImg from '../assets/hero.png'
import { profile, strengths } from '../data/portfolio'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 pt-24"
    >
      <div className="mx-auto grid min-h-[calc(100svh-64px)] max-w-6xl items-center gap-12 px-5 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-100">
            <Sparkles size={16} />
            Available for full stack engineering roles
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-medium text-cyan-200 sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build reliable business software across ASP.NET Core, Angular,
            React, SQL Server, and production deployment workflows.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 text-sm font-bold text-[#07111f] transition hover:bg-cyan-200"
            >
              View Projects
              <ArrowRight size={17} />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5"
            >
              <Download size={17} />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={16} className="text-cyan-300" />
            {profile.location}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/30">
            <div className="mb-5 flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-amber-300" />
              <span className="size-3 rounded-full bg-emerald-300" />
            </div>
            <div className="grid gap-4">
              {strengths.map((item, index) => (
                <div
                  key={item}
                  className="rounded-md border border-white/10 bg-[#0b1726] p-4"
                >
                  <p className="text-xs font-semibold uppercase text-slate-500">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <img
              src={heroImg}
              alt=""
              className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 opacity-50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
