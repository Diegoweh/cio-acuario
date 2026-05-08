"use client"

import type React from "react"

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Facebook, Instagram } from "lucide-react"

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
    whatsapp?: string
  }
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 2a9.95 9.95 0 0 0-8.57 15.02L2 22l5.1-1.34A9.95 9.95 0 1 0 12.05 2Zm0 18.21a8.25 8.25 0 0 1-4.21-1.15l-.3-.18-3.02.79.81-2.94-.19-.3a8.24 8.24 0 1 1 6.91 3.78Z" />
    </svg>
  )
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
                {socialLinks.whatsapp && (
                  <a
                    href={socialLinks.whatsapp}
                    aria-label="WhatsApp"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 hover:text-cyan-200 transition-all duration-200"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
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
        </div>
      </div>
    </footer>
  )
}
