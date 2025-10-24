import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import { Logo } from "./logo";

const navItems = [
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Karyawan", href: "/karyawan" },
  { label: "Bantuan", href: "/bantuan" },
  { label: "Kontak", href: "/kontak" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: <Instagram className="h-6 w-6" />,
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.6 5.82s.01 0 .01 0c.21 0 .42.02.62.05.05.01.1.02.15.03v3.31c-.05-.01-.1-.02-.15-.03a5.3 5.3 0 0 1-2.27-.43c-.34-.1-.68-.22-.98-.37v7.4c0 1.12-.91 2.03-2.03 2.03-1.12 0-2.03-.91-2.03-2.03s.91-2.03 2.03-2.03c.18 0 .35.02.52.07v-3.3c-.17-.05-.34-.07-.52-.07-2.21 0-4.01 1.8-4.01 4.01s1.8 4.01 4.01 4.01 4.01-1.8 4.01-4.01V9.45c.34.17.7.32 1.07.43.23.07.46.13.69.18v3.29c-.23-.05-.46-.11-.69-.18a5.3 5.3 0 0 1-1.07-.43v2.85c0 2.21-1.8 4.01-4.01 4.01S7.99 20.2 7.99 18s1.8-4.01 4.01-4.01c.21 0 .42.02.62.05v-3.31A3.94 3.94 0 0 1 8.6 6.57c0-.22.18-.4.4-.4h3.29c.22 0 .4.18.4.4.02.32.05.63.1.94.04.3.1.6.17.89H16.6z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: <Youtube className="h-6 w-6" />,
  },
  {
    name: "WhatsApp",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.78 18.39c.28 0 .4-.18.55-.33l1.89-1.82 3.87 2.8c.66.33 1.14.16 1.31-.64l3.37-15.82c.26-1.2-0.5-1.75-1.34-1.39l-19.1 7.47c-1.2.47-1.2 1.13-0.21 1.43l4.86 1.52 11.25-7.05c.54-.33 1.03-.15.6.22l-9.1 8.22-0.21 4.96z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1 space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Solusi otomotif terpercaya untuk semua kebutuhan kendaraan Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground">Navigasi</h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground">Hubungi Kami</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Jl. Otomotif Raya No. 123</li>
              <li>Jakarta, Indonesia</li>
              <li className="pt-2">
                <a href="mailto:info@bengkelbagema.com" className="hover:text-primary transition-colors">info@bengkelbagema.com</a>
              </li>
              <li>
                <a href="tel:+62211234567" className="hover:text-primary transition-colors">(021) 123-4567</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground">Ikuti Kami</h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Bengkel Bagema. Semua Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
