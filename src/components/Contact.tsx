import { BriefcaseBusiness, Code2, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { Section } from './Section'

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something reliable."
      intro="For software engineering roles, freelance work, or collaboration, Hamzeh is ready to discuss practical full stack solutions."
    >
      <div className="rounded-lg border border-white/10 bg-white p-5 text-[#07111f] sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xl font-semibold">Hamzeh Abedalqader</p>
            <p className="mt-2 text-slate-600">Full Stack Software Engineer</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#07111f] px-5 text-sm font-semibold text-white transition hover:bg-[#10223a]"
            >
              <Mail size={17} />
              Email
            </a>
            <a
              href={profile.linkedin}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-200 px-5 text-sm font-semibold text-[#07111f] transition hover:border-slate-300 hover:bg-slate-50"
            >
              <BriefcaseBusiness size={17} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-200 px-5 text-sm font-semibold text-[#07111f] transition hover:border-slate-300 hover:bg-slate-50"
            >
              <Code2 size={17} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
