"use client"

import type React from "react"

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Facebook, Instagram, Twitter } from "lucide-react"

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  logo?: string
  organizationName: string
  description?: string
  menuLinks?: FooterLink[]
  address?: string
  phone?: string
  email?: string
  socialLinks?: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export function Footer({
  logo,
  organizationName,
  description,
  menuLinks = [],
  address,
  phone,
  email,
  socialLinks = {},
}: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white border-t border-cyan-400/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            {logo && (
              <div className="w-45 h-auto">
                <img src={logo} alt={organizationName} className="w-full h-auto object-contain" />
              </div>
            )}
            <h3 className="text-lg font-bold text-white">{organizationName}</h3>
            {description && <p className="text-sm text-slate-400 leading-relaxed">{description}</p>}
          </div>

          {/* Menu Links */}
          {menuLinks.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-widest">Menú</h4>
              <nav className="flex flex-col space-y-2">
                {menuLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-cyan-300 transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}

          {/* Contact Info */}
          {(address || phone || email) && (
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-widest">Contacto</h4>
              <div className="space-y-3">
                {address && (
                  <div className="flex gap-3 text-sm text-slate-300">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <p>{address}</p>
                  </div>
                )}
                {phone && (
                  <div className="flex gap-3 text-sm text-slate-300">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <a href={`tel:${phone}`} className="hover:text-cyan-300 transition-colors">
                      {phone}
                    </a>
                  </div>
                )}
                {email && (
                  <div className="flex gap-3 text-sm text-slate-300">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <a href={`mailto:${email}`} className="hover:text-cyan-300 transition-colors">
                      {email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Social Links */}
          {Object.keys(socialLinks).length > 0 && (
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-widest">Síguenos</h4>
              <div className="flex gap-4">
                {socialLinks.facebook && (
                  <a
                    href={socialLinks.facebook}
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 hover:text-cyan-200 transition-all duration-200"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 hover:text-cyan-200 transition-all duration-200"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    aria-label="Twitter"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 hover:text-cyan-200 transition-all duration-200"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-slate-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {organizationName}. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link href="/privacy" className="hover:text-cyan-300 transition-colors">
              Privacidad
            </Link>
            <Link href="/terms" className="hover:text-cyan-300 transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
