import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";

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
                    Jl. Otomotif Raya No. 123, Jakarta, Indonesia
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
                  <p className="text-muted-foreground">(021) 123-4567</p>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold font-headline mb-4 text-gray-900">Lokasi Kami</h3>
              <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center border">
                <p className="text-muted-foreground">[Peta Lokasi Google Maps]</p>
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
