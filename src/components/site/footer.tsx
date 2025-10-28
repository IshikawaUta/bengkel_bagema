import Link from "next/link";
import { Instagram, Phone } from "lucide-react";
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
    href: "https://www.instagram.com/bengkel_bagema?igsh=eW1ub2N2czI2dWl1",
    icon: <Instagram className="h-6 w-6" />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@bengkel.bagema?_t=ZS-90ru69SKZGa&_r=1",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
      </svg>
    ),
  },
  {
    name: "Telepon",
    href: "tel:+6282261099776",
    icon: <Phone className="h-6 w-6" />,
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1 space-y-4">
            <Logo width={100} />
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
              <li>Jl. Gading Serpong Boulevard, Blok H/32</li>
              <li>Tangerang, Indonesia</li>
              <li className="pt-2">
                <a href="mailto:info@bengkelbagema.com" className="hover:text-primary transition-colors">info@bengkelbagema.com</a>
              </li>
              <li>
                <a href="tel:+6282261099776" className="hover:text-primary transition-colors">+62 822-6109-9776</a>
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
