import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

const highlights = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Layanan Profesional",
    description: "Mekanik kami yang berpengalaman siap menangani semua masalah kendaraan Anda.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Suku Cadang Asli",
    description: "Kami hanya menggunakan suku cadang asli dan berkualitas tinggi untuk perbaikan.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Harga Kompetitif",
    description: "Dapatkan layanan terbaik dengan harga yang transparan dan terjangkau.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
            Selamat Datang di Bengkel Bagema
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200">
            Solusi terpercaya untuk semua kebutuhan perawatan dan perbaikan kendaraan Anda.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/kontak">Hubungi Kami</Link>
          </Button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Mengapa Memilih Kami?
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Kami berkomitmen untuk memberikan pelayanan terbaik dengan standar kualitas tertinggi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    {highlight.icon}
                  </div>
                  <CardTitle className="mt-4">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Tentang Bengkel Bagema
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
              Bengkel Bagema didirikan dengan tujuan memberikan solusi otomotif yang handal dan terpercaya. Sejak awal, kami fokus pada kepuasan pelanggan melalui layanan yang jujur, profesional, dan efisien. Kami bangga menjadi mitra terpercaya Anda dalam merawat kendaraan.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-8">
              <Link href="/tentang-kami">Pelajari Lebih Lanjut</Link>
            </Button>
        </div>
      </section>
    </>
  );
}