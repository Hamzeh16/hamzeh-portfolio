import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  id: string
  eyebrow: string
  title: string
  intro?: string
}>

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase text-cyan-300">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-7 text-slate-300">{intro}</p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
