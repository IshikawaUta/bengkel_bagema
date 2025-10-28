import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak',
};

export default function ContactPage() {
  return (
    <>
      <header className="py-20 sm:py-28 text-center bg-gray-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-gray-900">Hubungi Kami</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Kami siap membantu. Kirimkan pesan atau kunjungi kami langsung.
          </p>
        </div>
      </header>
      <main className="container py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold font-headline text-gray-900">Informasi Kontak</h2>
              <p className="mt-3 text-muted-foreground">
                Jangan ragu untuk menghubungi kami melalui detail di bawah ini.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Alamat</h3>
                  <p className="text-muted-foreground">
                    Jl. Gading Serpong Boulevard, Blok H/32, Tangerang, Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="flex-shrink-0 mt-1 p-3 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:info@bengkelbagema.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@bengkelbagema.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="flex-shrink-0 mt-1 p-3 bg-primary/10 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telepon</h3>
                  <a href="tel:+6282261099776" className="text-muted-foreground hover:text-primary transition-colors">
                    +62 822-6109-9776
                  </a>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold font-headline mb-4 text-gray-900">Lokasi Kami</h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden border">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0678871416117!2d106.62104939999999!3d-6.2547868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd8420d57fcb%3A0xbf813aca551a6d9!2sBMS%20Bursa%20Mobil%20Summarecon%2C%20Gading%20Serpong!5e0!3m2!1sid!2sid!4v1761663814057!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border:0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold font-headline mb-6 text-gray-900">Kirim Pesan</h2>
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
