'use client'

import { Reveal } from '@/components/reveal'
import { AtSign, Camera, Video } from 'lucide-react'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Students', href: '#students' },
  { label: 'Videos', href: '#videos' },
]

const socials = [
  { label: 'Instagram', icon: Camera, href: '#' },
  { label: 'Threads', icon: AtSign, href: '#' },
  { label: 'YouTube', icon: Video, href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Reveal>
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <p className="font-serif text-3xl tracking-tight text-foreground">
                MEMORIA <span className="text-muted-foreground">2027</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A cinematic digital yearbook preserving the memories of a
                generation, one moment at a time.
              </p>
            </div>

            <nav aria-label="Footer" className="flex flex-col gap-3">
              {nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; 2027 Graduation Yearbook. All rights reserved.</p>
          <p>Made with memories that last forever.</p>
        </div>
      </div>
    </footer>
  )
}
